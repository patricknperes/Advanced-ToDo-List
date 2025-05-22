import React from 'react';
import DashboardStyle from './dashboard.module';
import DashboardCard from './DashboardCard';
import DashboardStatistics from './DashboardStatistics';
const painelIcon = '/assets/icons/painel.png';

const Dashboard = () => {
    // Hook para detectar largura da tela
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    let iconSize = 40;
    if (windowWidth < 600) {
        iconSize = 24;
    } else if (windowWidth < 900) {
        iconSize = 32;
    }

    return (
        <DashboardStyle.DashboardBackground>
            <DashboardStyle.DashboardContainer>
                <DashboardStyle.DashboardText>
                    Olá Usuário,
                </DashboardStyle.DashboardText>

                <DashboardStyle.DashboardTitleContainer>
                    <DashboardStyle.DashboardTitle>
                        Painel de Controle
                    </DashboardStyle.DashboardTitle>
                    <img src={painelIcon} alt="Painel Icon" style={{ width: iconSize, height: iconSize }} />
                </DashboardStyle.DashboardTitleContainer>

                <DashboardCard />
                <DashboardStatistics />

            </DashboardStyle.DashboardContainer>
        </DashboardStyle.DashboardBackground>
    );
};

export default Dashboard;