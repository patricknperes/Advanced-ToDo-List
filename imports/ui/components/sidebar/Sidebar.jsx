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
    cssVarPrefix: 'mui', // prefixo padrão
    colorSchemes: {
        dark: {
            palette: {
                mode: 'dark',
                background: {
                    default: '#18191A',       // --body-color
                    paper: '#18191A',          // --container-color
                },
                primary: {
                    main: '#6768F2',           // --color-accent
                    dark: '#6768F2',           // --color-accent-dark
                    contrastText: '#FFFFFF',  // texto em botões etc.
                },
                text: {
                    primary: '#B7B8B8',        // --text-color
                    secondary: '#888888',      // texto secundário, opcional
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


function DemoPageContent({ pathname }) {
    return (
        <Box
            sx={{
                py: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
            }}
        >
            <Typography>Dashboard content for {pathname}</Typography>
        </Box>
    );
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

    // Remove this const when copying and pasting into your project.
    const demoWindow = window !== undefined ? window() : undefined;

    return (
        // Remove this provider when copying and pasting into your project.
        <DemoProvider window={demoWindow}>
            {/* preview-start */}
            <AppProvider
                session={session}
                authentication={authentication}
                navigation={NAVIGATION}
                router={router}
                theme={demoTheme}
                window={demoWindow}
            >
                <DashboardLayout>
                    <DemoPageContent pathname={router.pathname} />
                </DashboardLayout>
            </AppProvider>
            {/* preview-end */}
        </DemoProvider>
    );
}

DashboardLayoutAccount.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * Remove this when copying and pasting into your project.
     */
    window: PropTypes.func,
};

export default DashboardLayoutAccount;
