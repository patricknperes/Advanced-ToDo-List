import React from 'react';
import DashboardStyle from './dashboard.module';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import { useMediaQuery, useTheme } from '@mui/material';


const DashboardCard = () => {

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (

        <DashboardStyle.DashboardCard>
            <DashboardStyle.DashboardCardTitle>
                Adicione uma nova tarefa
            </DashboardStyle.DashboardCardTitle>
            <DashboardStyle.DashboardCardText>
                Mantenha sua produtividade <br />
                em alta e continue organizando suas tarefas.
            </DashboardStyle.DashboardCardText>
            <Link to={'/add-tasks'}>
                <DashboardStyle.DashboardCardButton
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    size={isSmallScreen ? 'small' : 'large'}
                >
                    Nova Tarefa
                </DashboardStyle.DashboardCardButton>
            </Link>
        </DashboardStyle.DashboardCard>
    );
};

export default DashboardCard;