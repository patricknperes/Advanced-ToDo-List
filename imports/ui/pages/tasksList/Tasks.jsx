import { Meteor } from 'meteor/meteor';
import { useTracker, useSubscribe } from 'meteor/react-meteor-data';
import React, { useState } from 'react';
import { CircularProgress, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button, Pagination, Box } from '@mui/material';
import { TasksCollection } from '../../../api/TasksCollection';
import { Task } from './Task';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import TasksListStyle from './tasksList.module';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DisabledVisibleIcon from '@mui/icons-material/DisabledVisible';
import PublicIcon from '@mui/icons-material/Public';
import AddIcon from '@mui/icons-material/Add';
import Checkbox from '@mui/material/Checkbox';

const Tasks = () => {
    const navigate = useNavigate();
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1); // State for current page
    const itemsPerPage = 4; // Number of tasks per page

    const [filter, setFilter] = React.useState({
        $or: [{ userId: Meteor.userId() }],
        status: { $in: ['to-do', 'in_progress', 'completed'] },
    });

    const [search, setSearch] = React.useState('');
    const [showPublicTasks, setShowPublicTasks] = React.useState(false);
    const [hideCompletedTasks, setHideCompletedTasks] = React.useState(false);
    const [disableChip, setDisableChip] = React.useState(false);
    const [selectedTasks, setSelectedTasks] = React.useState([]);

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

    // Calculate pagination details
    const totalPages = Math.ceil(tasks.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedTasks = tasks.slice(startIndex, endIndex);

    const handleToggleSelectAll = () => {
        if (selectedTasks.length === tasks.length) {
            setSelectedTasks([]);
        } else {
            setSelectedTasks(tasks.map(task => task._id));
        }
    };

    const handleToggleTask = (taskId) => {
        setSelectedTasks(prev =>
            prev.includes(taskId)
                ? prev.filter(id => id !== taskId)
                : [...prev, taskId]
        );
    };

    const handleDeleteSelected = () => {
        setDeleteDialogOpen(true);
    };

    const confirmDeleteSelected = () => {
        Meteor.call('tasks.deleteMultiple', selectedTasks, (error) => {
            if (error) {
                console.error('Error deleting tasks:', error);
            } else {
                setSelectedTasks([]);
            }
        });
        setDeleteDialogOpen(false);
    };

    const handleCloseDialog = () => {
        setDeleteDialogOpen(false);
    };

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

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <TasksListStyle.TasksContainer>
            <TasksListStyle.TasksListMenu>
                <TasksListStyle.TasksListMenuLeft>
                    <TasksListStyle.TasksListMenuChip
                        icon={<PublicIcon />}
                        label="Públicas"
                        clickable
                        disabled={disableChip}
                        onClick={togglePublicTasks}
                        color={showPublicTasks ? 'primary' : 'default'}
                        variant={showPublicTasks ? 'filled' : 'outlined'}
                    />

                    <TasksListStyle.TasksListMenuChip
                        icon={<DisabledVisibleIcon />}
                        label="Concluídas"
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
                    <IconButton
                        onClick={handleDeleteSelected}
                        disabled={selectedTasks.length === 0}
                    >
                        <DeleteOutlineIcon />
                    </IconButton>

                    <TasksListStyle.TasksListMenuButton
                        size="large"
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
                    <Checkbox
                        checked={tasks.length > 0 && selectedTasks.length === tasks.length}
                        onChange={handleToggleSelectAll}
                    />

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

            {isTasksLoading ? (
                <TasksListStyle.TasksListLoadingContainer>
                    <CircularProgress sx={{ color: 'var(--color-accent)' }} />
                    <TasksListStyle.TasksListLoadingText>
                        Carregando...
                    </TasksListStyle.TasksListLoadingText>
                </TasksListStyle.TasksListLoadingContainer>
            ) : paginatedTasks.length > 0 ? (
                paginatedTasks.map((task) => (
                    <Task
                        key={task._id}
                        task={task}
                        onDeleteClick={deleteTask}
                        onStatusChange={updateTaskStatus}
                        onToggleTask={handleToggleTask}
                        isSelected={selectedTasks.includes(task._id)}
                    />
                ))
            ) : (
                <TasksListStyle.TasksListNotFoundContainer>
                    <TasksListStyle.TasksListNotFoundImage
                        component="img"
                        src="/assets/taskNotFound.png"
                        alt="Empty tasks"
                    />
                    {/* <TasksListStyle.TasksListNotFoundText>
                        Nenhuma tarefa encontrada
                    </TasksListStyle.TasksListNotFoundText> */}
                </TasksListStyle.TasksListNotFoundContainer>
            )}

            {totalPages > 0 && (
                <Box sx={{ display: 'flex', justifyContent: 'end', marginTop: '1.5rem' }}>
                    <Pagination
                        count={totalPages}
                        page={currentPage}
                        onChange={handlePageChange}
                        color="primary"
                    />
                </Box>
            )}

            <Dialog
                open={deleteDialogOpen}
                onClose={handleCloseDialog}
                aria-labelledby="delete-dialog-title"
            >
                <DialogTitle id="delete-dialog-title">Confirmar Exclusão de Tarefas</DialogTitle>
                <DialogContent>
                    Tem certeza de que deseja excluir {selectedTasks.length} tarefa{selectedTasks.length > 1 ? 's' : ''} selecionada{selectedTasks.length > 1 ? 's' : ''}?
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} sx={{ color: 'var(--text-color)' }}> Cancelar</Button>
                    <Button onClick={confirmDeleteSelected} color="error" autoFocus>
                        Excluir
                    </Button>
                </DialogActions>
            </Dialog>
        </TasksListStyle.TasksContainer>
    );
};

export default Tasks;