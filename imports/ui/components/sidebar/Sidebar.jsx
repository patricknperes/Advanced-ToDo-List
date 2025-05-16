import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Face2Icon from '@mui/icons-material/Face2';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { DemoProvider, useDemoRouter } from '@toolpad/core/internal';

import Dashboard from '../../pages/dashboard/Dashboard';
import TasksList from '../../pages/tasksList/TasksList';
import UserProfile from '../../pages/userProfile/UserProfile';

const NAVIGATION = [
    {
        segment: 'dashboard',
        title: 'Dashboard',
        icon: <DashboardIcon />,
    },
    {
        segment: 'tasks',
        title: 'Tarefas',
        icon: <AssignmentIcon />,
    },
    {
        segment: 'profile',
        title: 'Perfil',
        icon: <Face2Icon />,
    },
];

const demoTheme = createTheme({
    cssVarPrefix: 'mui',
    colorSchemes: {
        dark: {
            palette: {
                mode: 'dark',
                background: {
                    default: '#18191A',
                    paper: '#18191A',
                },
                primary: {
                    main: '#6768F2',
                    dark: '#6768F2',
                    contrastText: '#FFFFFF',
                },
                text: {
                    primary: '#B7B8B8',
                    secondary: '#888888',
                },
            },
        },
    },
    cssVariables: {
        colorSchemeSelector: 'class',
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536,
        },
    },
});

// Componente de exemplo para outras páginas
function DemoPageContent({ pathname }) {
    switch (pathname) {
        case '/dashboard':
            return (
                <Box>
                    <Dashboard />
                </Box>
            );
        case '/tasks':
            return (
                <Box>
                    <TasksList />
                </Box>
            );
        case '/profile':
            return (
                <Box>
                    <UserProfile />
                </Box>
            );
        default:
            return (
                <Box>
                    <Typography variant="h5">Página não encontrada</Typography>
                </Box>
            );
    }
}

DemoPageContent.propTypes = {
    pathname: PropTypes.string.isRequired,
};

function DashboardLayoutAccount(props) {
    const { window } = props;

    const [session, setSession] = React.useState({
        user: {
            name: 'Bharat Kashyap',
            email: 'bharatkashyap@outlook.com',
            image: 'https://avatars.githubusercontent.com/u/19550456',
        },
    });

    const authentication = React.useMemo(() => {
        return {
            signIn: () => {
                setSession({
                    user: {
                        name: 'Bharat Kashyap',
                        email: 'bharatkashyap@outlook.com',
                        image: 'https://avatars.githubusercontent.com/u/19550456',
                    },
                });
            },
            signOut: () => {
                setSession(null);
            },
        };
    }, []);

    const router = useDemoRouter('/dashboard');

    const demoWindow = window !== undefined ? window() : undefined;

    // Função para renderizar o conteúdo com base no pathname
    const renderContent = () => {
        switch (router.pathname) {
            case '/dashboard':
                return <DemoPageContent pathname={router.pathname} />; // Renderiza seu componente Dashboard
            case '/tasks':
                return <DemoPageContent pathname={router.pathname} />; // Outra página
            case '/profile':
                return <DemoPageContent pathname={router.pathname} />; // Outra página
            default:
                return <DemoPageContent pathname={router.pathname} />; // Página padrão
        }
    };

    return (
        <DemoProvider window={demoWindow}>
            <AppProvider
                session={session}
                authentication={authentication}
                navigation={NAVIGATION}
                router={router}
                theme={demoTheme}
                window={demoWindow}
            >
                <DashboardLayout>
                    {renderContent()} {/* Renderiza o conteúdo com base na rota */}
                </DashboardLayout>
            </AppProvider>
        </DemoProvider>
    );
}

DashboardLayoutAccount.propTypes = {
    window: PropTypes.func,
};

export default DashboardLayoutAccount;