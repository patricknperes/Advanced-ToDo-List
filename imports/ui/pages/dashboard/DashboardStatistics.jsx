import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker, useSubscribe } from 'meteor/react-meteor-data';
import { Navigate } from 'react-router-dom';
import DashboardStyle from './dashboard.module';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Link } from 'react-router-dom';
import { TasksCollection } from '../../../api/TasksCollection';
import { CircularProgress, Box, Typography } from '@mui/material';

const DashboardStatistics = () => {
    const isLoading = useSubscribe('tasks.user');
    const { user, tasksData, error } = useTracker(() => {
        const user = Meteor.user();
        if (!user) {
            return { user: null, tasksData: null, error: null };
        }
        const tasks = TasksCollection.find({ userId: user._id }).fetch();
        return {
            user,
            tasksData: {
                created: tasks.filter(t => t.status === 'to-do').length,
                pending: tasks.filter(t => t.status === 'in_progress').length,
                completed: tasks.filter(t => t.status === 'completed').length,
            },
            error: !Meteor.status().connected ? 'Não foi possível conectar ao servidor' : null,
        };
    }, []);

    if (isLoading()) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
                <CircularProgress aria-label="Carregando estatísticas de tarefas" />
                <Typography variant="body1" sx={{ ml: 2 }}>
                    Carregando...
                </Typography>
            </Box>
        );
    }

    if (error) {
        return (
            <Box sx={{ textAlign: 'center', mt: 4 }}>
                <Typography variant="h6" color="error">
                    {error}
                </Typography>
            </Box>
        );
    }

    if (!user) {
        return <Navigate to="/login" replace state={{ message: 'Por favor, faça login' }} />;
    }

    const { created = 0, pending = 0, completed = 0 } = tasksData || {};

    return (
        <DashboardStyle.DashboardStatisticsContainer>
            <DashboardStyle.DashboardStatisticsCardAccent role="region" aria-label="Estatísticas de tarefas criadas">
                <DashboardStyle.DashboardStatisticsTitleContent>
                    <DashboardStyle.DashboardStatisticsTitle>
                        Tarefas Criadas
                    </DashboardStyle.DashboardStatisticsTitle>
                    <Link to="/add-tasks" aria-label="Adicionar nova tarefa">
                        <DashboardStyle.DashboardStatisticsButton>
                            <ArrowForwardIcon aria-hidden="true" />
                        </DashboardStyle.DashboardStatisticsButton>
                    </Link>
                </DashboardStyle.DashboardStatisticsTitleContent>
                <DashboardStyle.DashboardStatisticsNumber variant="h1">
                    {created}
                </DashboardStyle.DashboardStatisticsNumber>
                <DashboardStyle.DashboardStatisticsYellow
                    variant="text"
                    startIcon={<AssignmentIcon aria-hidden="true" />}
                >
                    Tarefas adicionadas
                </DashboardStyle.DashboardStatisticsYellow>
            </DashboardStyle.DashboardStatisticsCardAccent>

            <DashboardStyle.DashboardStatisticsCard role="region" aria-label="Estatísticas de tarefas pendentes">
                <DashboardStyle.DashboardStatisticsTitleContent>
                    <DashboardStyle.DashboardStatisticsTitle>
                        Tarefas Pendentes
                    </DashboardStyle.DashboardStatisticsTitle>
                    <Link to="/add-tasks" aria-label="Adicionar nova tarefa">
                        <DashboardStyle.DashboardStatisticsButton>
                            <ArrowForwardIcon aria-hidden="true" />
                        </DashboardStyle.DashboardStatisticsButton>
                    </Link>
                </DashboardStyle.DashboardStatisticsTitleContent>
                <DashboardStyle.DashboardStatisticsNumber variant="h1">
                    {pending}
                </DashboardStyle.DashboardStatisticsNumber>
                <DashboardStyle.DashboardStatisticsRed variant="text" startIcon={<AccessAlarmIcon aria-hidden="true" />}>
                    Tarefas em andamento
                </DashboardStyle.DashboardStatisticsRed>
            </DashboardStyle.DashboardStatisticsCard>

            <DashboardStyle.DashboardStatisticsCard role="region" aria-label="Estatísticas de tarefas concluídas">
                <DashboardStyle.DashboardStatisticsTitleContent>
                    <DashboardStyle.DashboardStatisticsTitle>
                        Tarefas Concluídas
                    </DashboardStyle.DashboardStatisticsTitle>
                    <Link to="/add-tasks" aria-label="Adicionar nova tarefa">
                        <DashboardStyle.DashboardStatisticsButton>
                            <ArrowForwardIcon aria-hidden="true" />
                        </DashboardStyle.DashboardStatisticsButton>
                    </Link>
                </DashboardStyle.DashboardStatisticsTitleContent>
                <DashboardStyle.DashboardStatisticsNumber variant="h1">
                    {completed}
                </DashboardStyle.DashboardStatisticsNumber>
                <DashboardStyle.DashboardStatisticsGreen variant="text" startIcon={<CheckCircleOutlineIcon aria-hidden="true" />}>
                    Tarefas finalizadas
                </DashboardStyle.DashboardStatisticsGreen>
            </DashboardStyle.DashboardStatisticsCard>
        </DashboardStyle.DashboardStatisticsContainer>
    );
};

export default DashboardStatistics;