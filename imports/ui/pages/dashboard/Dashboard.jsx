import React from 'react';
import DashboardStyle from './dashboard.module';
import DashboardCard from './DashboardCard';
import DashboardStatistics from './DashboardStatistics';
const painelIcon = '/assets/icons/painel.png';

const Dashboard = () => {
    return (
        <DashboardStyle.DashboardBackground>
            <DashboardStyle.DashboardContainer>
                <DashboardStyle.DashboardText variant="h5">
                    Olá Usuário,
                </DashboardStyle.DashboardText>

                <DashboardStyle.DashboardTitleContainer>
                    <DashboardStyle.DashboardTitle variant="h4">
                        Painel de Controle
                    </DashboardStyle.DashboardTitle>
                    <img src={painelIcon} alt="Painel Icon" style={{ width: 40, height: 40 }} />
                </DashboardStyle.DashboardTitleContainer>

                <DashboardCard />
                <DashboardStatistics />

            </DashboardStyle.DashboardContainer>
        </DashboardStyle.DashboardBackground>
    );
};

export default Dashboard;