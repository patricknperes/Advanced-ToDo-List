import { Meteor } from 'meteor/meteor';
import { useTracker, useSubscribe } from 'meteor/react-meteor-data';
import React from 'react';
import { Box, Typography, CircularProgress, Button, Chip, TextField } from '@mui/material';
import { TasksCollection } from '../../../api/TasksCollection';
import { Task } from './Task';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import TasksListStyle from './tasksList.module';

import DisabledVisibleIcon from '@mui/icons-material/DisabledVisible';
import PublicIcon from '@mui/icons-material/Public';
import AddIcon from '@mui/icons-material/Add';

const Tasks = () => {
    const navigate = useNavigate();

    const [filter, setFilter] = React.useState({
        $or: [{ userId: Meteor.userId() }],
        status: { $in: ['to-do', 'in_progress', 'completed'] },
    });

    const [search, setSearch] = React.useState('');

    const [showPublicTasks, setShowPublicTasks] = React.useState(false);
    const [hideCompletedTasks, setHideCompletedTasks] = React.useState(false);

    const [disableChip, setDisableChip] = React.useState(false);

    React.useEffect(() => {
        let newFilter = {};

        if (search) {
            setDisableChip(true);
            newFilter = {
                $and: [
                    { $or: [{ userId: Meteor.userId() }, { pessoal: false }] },
                    { name: { $regex: search, $options: 'i' } },
                ],
                status: { $in: ['to-do', 'in_progress', 'completed'] },
            };
        } else {
            setDisableChip(false);
            if (showPublicTasks) {
                newFilter = {
                    $or: [{ userId: Meteor.userId() }, { pessoal: false }],
                };
            } else {
                newFilter = {
                    userId: Meteor.userId(),
                };
            }

            if (hideCompletedTasks) {
                newFilter.status = { $in: ['to-do', 'in_progress'] };
            } else {
                newFilter.status = { $in: ['to-do', 'in_progress', 'completed'] };
            }
        }

        setFilter(newFilter);
    }, [showPublicTasks, hideCompletedTasks, search]);

    const isLoading = useSubscribe('tasks.filter', filter);

    const { tasks, isTasksLoading } = useTracker(() => {
        const noDataAvailable = { tasks: [] };

        if (isLoading()) {
            return { ...noDataAvailable, isTasksLoading: true };
        }

        const tasks = TasksCollection.find({}, { sort: { data: -1 } }).fetch();

        return { tasks, isTasksLoading: false };
    });

    const deleteTask = (task) => {
        Meteor.call('tasks.delete', { _id: task._id }, (error) => {
            if (error) {
                console.error('Error deleting task:', error);
            }
        });
    };

    const updateTaskStatus = (task, newStatus) => {
        Meteor.call(
            'tasks.updateStatus',
            {
                _id: task._id,
                newStatus: newStatus,
            },
            (error) => {
                if (error) {
                    console.error('Error updating task status:', error);
                }
            }
        );
    };

    const handleAddNewTask = () => {
        navigate('/add-tasks');
    };

    const togglePublicTasks = () => {
        setShowPublicTasks(!showPublicTasks);
    };

    const toggleCompletedTasks = () => {
        setHideCompletedTasks(!hideCompletedTasks);
    };

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    return (
        <TasksListStyle.TasksContainer>

            <TasksListStyle.TasksListMenu>
                <TasksListStyle.TasksListMenuLeft>
                    <TasksListStyle.TasksListMenuChip
                        icon={<PublicIcon />}
                        label="Tarefas Públicas"
                        clickable
                        disabled={disableChip}
                        onClick={togglePublicTasks}
                        color={showPublicTasks ? 'primary' : 'default'}
                        variant={showPublicTasks ? 'filled' : 'outlined'}
                    />

                    <TasksListStyle.TasksListMenuChip
                        icon={<DisabledVisibleIcon />}
                        label="Ocultar Concluídas"
                        clickable
                        disabled={disableChip}
                        onClick={toggleCompletedTasks}
                        color={hideCompletedTasks ? 'primary' : 'default'}
                        variant={hideCompletedTasks ? 'filled' : 'outlined'}
                    />

                    <TasksListStyle.TasksListMenuSearchBar
                        fullWidth
                        placeholder="Pesquisar tarefas"
                        autoComplete="off"
                        value={search}
                        onChange={handleSearch}
                        variant="outlined"
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />

                </TasksListStyle.TasksListMenuLeft>

                <TasksListStyle.TasksListMenuRight>

                    <TasksListStyle.TasksListMenuButton
                        variant="contained"
                        onClick={handleAddNewTask}
                        type="submit"
                        startIcon={<AddIcon />}
                    >
                        Nova Tarefa
                    </TasksListStyle.TasksListMenuButton>

                </TasksListStyle.TasksListMenuRight>
            </TasksListStyle.TasksListMenu>

            <TasksListStyle.TasksListLabelContainer>
                <TasksListStyle.TasksListLabelLeft>
                    <TasksListStyle.TasksListLabelTitle>
                        Lista de Tarefas
                    </TasksListStyle.TasksListLabelTitle>
                </TasksListStyle.TasksListLabelLeft>

                <TasksListStyle.TasksListLabelRigth>
                    <TasksListStyle.TasksListLabelTitle>
                        Responsável
                    </TasksListStyle.TasksListLabelTitle>

                    <TasksListStyle.TasksListLabelTitle>
                        Progresso
                    </TasksListStyle.TasksListLabelTitle>

                    <TasksListStyle.TasksListLabelTitle>
                        Opções
                    </TasksListStyle.TasksListLabelTitle>
                </TasksListStyle.TasksListLabelRigth>
            </TasksListStyle.TasksListLabelContainer>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    overflow: 'auto',
                }}
            >
                {isTasksLoading ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
                        <CircularProgress sx={{ color: '#4A5C7E' }} />
                    </Box>
                ) : tasks.length > 0 ? (
                    tasks.map((task) => (
                        <Task
                            key={task._id}
                            task={task}
                            onDeleteClick={deleteTask}
                            onStatusChange={updateTaskStatus}
                        />
                    ))
                ) : (
                    <Box
                        sx={{
                            p: 3,
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Box
                            component="img"
                            src="/images/wired-outline-262-emoji-wow-hover-pinch.gif"
                            alt="Empty tasks"
                            sx={{
                                width: 300,
                                height: 300,
                                mt: 5,
                                mb: 2,
                                objectFit: 'cover',
                                borderRadius: 1,
                                color: 'text.secondary',
                            }}
                        />
                        <Typography
                            color="textSecondary"
                            sx={{ mt: 1, fontFamily: 'var(--font-family)', fontSize: '24px' }}
                        >
                            Você não tem tarefas!
                        </Typography>
                    </Box>
                )}
            </Box>
        </TasksListStyle.TasksContainer>
    );
};

export default Tasks;
