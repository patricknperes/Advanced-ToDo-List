import React from 'react';
import { Meteor } from 'meteor/meteor';
import { MenuItem, IconButton, CircularProgress, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useTracker } from 'meteor/react-meteor-data';
import { useNavigate } from 'react-router-dom';
import TasksListStyle from './tasksList.module';
import Checkbox from '@mui/material/Checkbox';

export const Task = ({ task, onDeleteClick, onStatusChange, onToggleTask, isSelected }) => {
    const navigate = useNavigate();

    const handleEdit = () => {
        navigate(`/edit-task/${task._id}`);
    };

    const statusDisplay = {
        'to-do': 'Pendente',
        in_progress: 'Em andamento',
        completed: 'Concluído',
    };

    const { taskUser, isLoading, block } = useTracker(() => {
        const subscription = Meteor.subscribe('currentAndIdUser', task.userId);
        const Taskuser = Meteor.users.findOne({ _id: task.userId });
        const user = Meteor.user();
        const block = !(task.userId === user._id);
        return {
            taskUser: Taskuser,
            isLoading: !subscription.ready(),
            block: block,
        };
    }, []);

    if (isLoading) {
        return (
            <TasksListStyle.TasksListLoadingContainer>
                <CircularProgress size={24} sx={{ color: 'var(--color-accent)' }} />
            </TasksListStyle.TasksListLoadingContainer>
        );
    }

    const userName = taskUser.profile.nome || 'User Name';
    const userNamePartes = userName.split(' ');
    const userFirstName = userNamePartes[0].charAt(0).toUpperCase() + userNamePartes[0].slice(1);

    return (
        <TasksListStyle.TasksListComponetContainer>
            <TasksListStyle.TasksListComponetLeft>
                <Checkbox
                    checked={isSelected}
                    onChange={() => onToggleTask(task._id)}
                    disabled={block}
                />

                <TasksListStyle.TasksListTooltip title={`Descrição: ${task.descricao}`} placement="bottom-start">
                    <TasksListStyle.TasksListComponetTitle>
                        {task.name}
                    </TasksListStyle.TasksListComponetTitle>
                </TasksListStyle.TasksListTooltip>
            </TasksListStyle.TasksListComponetLeft>

            <TasksListStyle.TasksListComponetRigth>
                <TasksListStyle.TasksListComponetTitle>
                    {userFirstName}
                </TasksListStyle.TasksListComponetTitle>

                <TasksListStyle.TasksListComponetFormControl>
                    <TasksListStyle.TasksListComponetSelect
                        value={task.status}
                        onChange={(e) => onStatusChange(task, e.target.value)}
                        disabled={block}
                        renderValue={(value) => statusDisplay[value] || value}
                    >
                        <MenuItem value="to-do">Pendente</MenuItem>
                        <MenuItem value="in_progress">Em andamento</MenuItem>
                        <MenuItem value="completed">Concluído</MenuItem>
                    </TasksListStyle.TasksListComponetSelect>
                </TasksListStyle.TasksListComponetFormControl>

                <TasksListStyle.TasksListComponetButtonContent>
                    <IconButton
                        size="small"
                        onClick={handleEdit}
                        disabled={block}
                    >
                        <EditIcon />
                    </IconButton>

                    <IconButton
                        size="small"
                        onClick={() => onDeleteClick(task)}
                        sx={{ color: '#E83F25' }}
                        disabled={block}
                    >
                        <DeleteOutlineIcon />
                    </IconButton>
                </TasksListStyle.TasksListComponetButtonContent>
            </TasksListStyle.TasksListComponetRigth>
        </TasksListStyle.TasksListComponetContainer>
    );
};