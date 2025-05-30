import * as React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Face2Icon from '@mui/icons-material/Face2';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import Dashboard from '../../pages/dashboard/Dashboard';
import TasksList from '../../pages/tasksList/TasksList';
import UserProfile from '../../pages/userProfile/UserProfile';
import AddTasks from '../../pages/addTasks/AddTasks';
import EditTasks from '../../pages/editTasks/EditTasks';
import NotFound from '../../pages/notFound/NotFound';

// Definição dos itens exibidos na sidebar
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
    {
        kind: 'divider',
    },
];

// Tema personalizado
const demoTheme = createTheme({
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
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    typography: {
        fontFamily: 'var(--font-family)',
    },
});

// Componente que renderiza o conteúdo com base na rota
function DemoPageContent({ pathname }) {
    const params = useParams(); // Captura o :id da rota /edit-task/:id

    switch (pathname) {
        case '/dashboard':
            return <Box><Dashboard /></Box>;
        case '/tasks':
            return <Box><TasksList /></Box>;
        case '/profile':
            return <Box><UserProfile /></Box>;
        case '/add-tasks':
            return <Box><AddTasks /></Box>;
        case `/edit-task/${params.id}`:
            return <Box><EditTasks /></Box>;
        default:
            return <Box><NotFound /></Box>;
    }
}

DemoPageContent.propTypes = {
    pathname: PropTypes.string.isRequired,
};

// Componente principal do layout com a sidebar
function DashboardLayoutAccount(props) {
    const { window } = props;

    const { user, isLoading, error } = useTracker(() => {
        const subscription = Meteor.subscribe('currentUserData');
        return {
            user: Meteor.user(),
            isLoading: !subscription.ready(),
            error: !Meteor.status().connected ? 'Não foi possível conectar ao servidor' : null,
        };
    }, []);

    const location = useLocation();
    const navigate = useNavigate();

    const router = React.useMemo(() => ({
        pathname: location.pathname,
        searchParams: new URLSearchParams(location.search),
        navigate: (path) => navigate(path),
    }), [location, navigate]);

    const demoWindow = window !== undefined ? window() : undefined;

    const session = React.useMemo(() => {
        if (!user) return null;
        return {
            user: {
                name: user.profile?.nome || 'Usuário',
                email: user.emails?.[0]?.address || 'sem@email.com',
                image: user.profile?.foto || '/assets/userImageProfile.webp',
            },
        };
    }, [user]);

    const authentication = React.useMemo(() => ({
        signOut: () => {
            Meteor.logout((err) => {
                if (!err) {
                    navigate('/login');
                }
            });
        },
    }), [navigate]);

    if (isLoading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} role="status" aria-label="Carregando dashboard">
                <CircularProgress />
                <Typography variant="body1" sx={{ ml: 2 }}>
                    Carregando...
                </Typography>
            </Box>
        );
    }

    if (error) {
        return (
            <Box sx={{ p: 3, textAlign: 'center' }}>
                <Typography variant="h6" color="error">
                    {error}
                </Typography>
            </Box>
        );
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return (
        <AppProvider
            session={session}
            authentication={authentication}
            navigation={NAVIGATION}
            router={router}
            theme={demoTheme}
            window={demoWindow}
            branding={{
                logo: <img src="/assets/logoSynergiaLilas.png" alt="Logo" style={{ width: '130px', height: 'auto', marginLeft: 'var(--mb-0-25)' }} />,
                title: '',
            }}
        >
            <DashboardLayout>
                <DemoPageContent pathname={router.pathname} />
            </DashboardLayout>
        </AppProvider>
    );
}

DashboardLayoutAccount.propTypes = {
    window: PropTypes.func,
};

export default DashboardLayoutAccount;