import React from 'react';
import DashboardStyle from './dashboard.module';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

const DashboardCard = () => {
    return (

        <DashboardStyle.DashboardCard>
            <DashboardStyle.DashboardCardTitle variant="h5">
                Adicione uma nova tarefa
            </DashboardStyle.DashboardCardTitle>
            <DashboardStyle.DashboardCardText variant="h4">
                Mantenha sua produtividade <br />
                em alta e continue organizando suas tarefas.
            </DashboardStyle.DashboardCardText>
            <Link to={'/add-tasks'}>
                <DashboardStyle.DashboardCardButton variant="contained" endIcon={<ArrowForwardIcon />}>
                    Nova Tarefa
                </DashboardStyle.DashboardCardButton>
            </Link>
        </DashboardStyle.DashboardCard>
    );
};

export default DashboardCard;