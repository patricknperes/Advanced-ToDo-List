import React from 'react';
import DashboardStyle from './dashboard.module';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const DashboardStatistics = () => {
    return (

        <DashboardStyle.DashboardStatisticsContainer>

            <DashboardStyle.DashboardStatisticsCardAccent>
                <DashboardStyle.DashboardStatisticsTitleContent>
                    <DashboardStyle.DashboardStatisticsTitle variant="h5">
                        Tarefas Criadas
                    </DashboardStyle.DashboardStatisticsTitle>

                    <DashboardStyle.DashboardStatisticsButton >
                        <ArrowForwardIcon />
                    </DashboardStyle.DashboardStatisticsButton>
                </DashboardStyle.DashboardStatisticsTitleContent>

                <DashboardStyle.DashboardStatisticsNumber variant="h1">
                    24
                </DashboardStyle.DashboardStatisticsNumber>

                <DashboardStyle.DashboardStatisticsYellow variant='text' startIcon={<AssignmentIcon />} >
                    Projetos adicionados
                </DashboardStyle.DashboardStatisticsYellow>

            </DashboardStyle.DashboardStatisticsCardAccent>

            <DashboardStyle.DashboardStatisticsCard>
                <DashboardStyle.DashboardStatisticsTitleContent>
                    <DashboardStyle.DashboardStatisticsTitle variant="h5">
                        Tarefas Pendentes
                    </DashboardStyle.DashboardStatisticsTitle>
                    <DashboardStyle.DashboardStatisticsButton >
                        <ArrowForwardIcon />
                    </DashboardStyle.DashboardStatisticsButton>
                </DashboardStyle.DashboardStatisticsTitleContent>

                <DashboardStyle.DashboardStatisticsNumber variant="h1">
                    17
                </DashboardStyle.DashboardStatisticsNumber>

                <DashboardStyle.DashboardStatisticsRed variant='text' startIcon={<AccessAlarmIcon />} >
                    Projetos ainda não iniciados
                </DashboardStyle.DashboardStatisticsRed>

            </DashboardStyle.DashboardStatisticsCard>

            <DashboardStyle.DashboardStatisticsCard>
                <DashboardStyle.DashboardStatisticsTitleContent>
                    <DashboardStyle.DashboardStatisticsTitle variant="h5">
                        Tarefas Concluídas
                    </DashboardStyle.DashboardStatisticsTitle>

                    <DashboardStyle.DashboardStatisticsButton >
                        <ArrowForwardIcon />
                    </DashboardStyle.DashboardStatisticsButton>
                </DashboardStyle.DashboardStatisticsTitleContent>

                <DashboardStyle.DashboardStatisticsNumber variant="h1">
                    7
                </DashboardStyle.DashboardStatisticsNumber>

                <DashboardStyle.DashboardStatisticsGreen variant='text' startIcon={<CheckCircleOutlineIcon />} >
                    Projetos finalizados
                </DashboardStyle.DashboardStatisticsGreen>

            </DashboardStyle.DashboardStatisticsCard>

        </DashboardStyle.DashboardStatisticsContainer>

    );
};

export default DashboardStatistics;