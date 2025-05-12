import React from 'react';
import DashboardStyle from './dashboard.module';
import DashboardCard from './DashboardCard';
import DashboardStatistics from './DashboardStatistics';

const Dashboard = () => {
    return (

        <DashboardStyle.DashboardContainer>
            <DashboardStyle.DashboardText variant="h5">
                Olá Patrick Peres,
            </DashboardStyle.DashboardText>
            <DashboardStyle.DashboardTitle variant="h3">
                Painel de Controle
            </DashboardStyle.DashboardTitle>

            <DashboardCard />
            <DashboardStatistics />

        </DashboardStyle.DashboardContainer>
    );
};

export default Dashboard;