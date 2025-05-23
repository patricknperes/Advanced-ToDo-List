import React, { useState, useEffect } from 'react';
import { Meteor } from 'meteor/meteor';
import {
    Box,
    Typography,
    MenuItem,
    Select,
    IconButton,
    FormControl,
    CircularProgress,
    Icon,
    Tooltip,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import { useTracker } from 'meteor/react-meteor-data';
import { useNavigate } from 'react-router-dom';

export const Task = ({ task, onDeleteClick, onStatusChange }) => {
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
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '16px',
                    borderRadius: '8px',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                    backgroundColor: '#f9f9f9',
                    height: '72px',
                }}
            >
                <CircularProgress size={24} sx={{ color: '#4A5C7E' }} />
                <Typography sx={{ ml: 2, fontFamily: 'var(--font-family)', fontSize: '14px', color: '#4A5C7E' }}>
                    Carregando...
                </Typography>
            </Box>
        );
    }

    const userName = taskUser.profile.nome || 'User Name';
    const userNamePartes = userName.split(' ');
    const userFirstName = userNamePartes[0].charAt(0).toUpperCase() + userNamePartes[0].slice(1);

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                padding: '8px 16px',
                width: 'auto',
                '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                },
            }}
        >
            <Icon sx={{ color: '#4A5C7E', mb: 1, mr: 2.5 }}>
                <TaskOutlinedIcon fontSize="small" />
            </Icon>

            <Box sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                <Tooltip title={`descrição: ${task.descricao}`} placement="bottom-start">
                    <Typography
                        sx={{
                            fontFamily: 'var(--font-family)',
                            fontWeight: 400,
                            fontSize: '14px',
                            width: '70%',
                            color: '#4A5C7E',
                            textDecoration: task.isChecked ? 'line-through' : 'none',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                        }}
                    >
                        {task.name}
                    </Typography>
                </Tooltip>

                <Typography
                    sx={{
                        fontFamily: 'var(--font-family)',
                        fontWeight: 400,
                        fontSize: '14px',
                        width: '10%',
                        color: '#4A5C7E',
                    }}
                >
                    {userFirstName}
                </Typography>

                <Box sx={{ width: '15%' }}>
                    <FormControl fullWidth size="small">
                        <Select
                            value={task.status}
                            onChange={(e) => onStatusChange(task, e.target.value)}
                            sx={{
                                height: '30px',
                                fontSize: '14px',
                                fontFamily: 'var(--font-family)',
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#4A5C7E',
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#4A5C7E',
                                },
                            }}
                            disabled={block}
                            renderValue={(value) => statusDisplay[value] || value}
                        >
                            <MenuItem value="to-do">Pendente</MenuItem>
                            <MenuItem value="in_progress">Em andamento</MenuItem>
                            <MenuItem value="completed">Concluído</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton size="small" onClick={handleEdit} sx={{ color: '#4A5C7E' }} disabled={block}>
                    <EditIcon fontSize="small" />
                </IconButton>

                <IconButton
                    size="small"
                    onClick={() => onDeleteClick(task)}
                    sx={{ color: 'red' }}
                    disabled={block}
                >
                    <DeleteOutlineIcon fontSize="small" />
                </IconButton>
            </Box>
        </Box>
    );
};
