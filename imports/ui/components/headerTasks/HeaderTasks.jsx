import React from 'react';
import HeaderTasksStyle from './headerTasks.module.jsx';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

const HeaderTasks = () => {
    return (
        <HeaderTasksStyle.HeaderTasksContainer>
            <HeaderTasksStyle.HeaderTasksContent>
                <Link to={'/dashboard'}>
                    <HeaderTasksStyle.HeaderTasksImage
                        src="/assets/logoSynergiaLilas.png"
                        alt="Logo"
                    />
                </Link>
                <HeaderTasksStyle.HeaderTasksAvatarContainer>
                    <Link to={'/dashboard'}>
                        <HeaderTasksStyle.CardButtonOutlined variant="outlined">
                            Dashboard
                        </HeaderTasksStyle.CardButtonOutlined>
                    </Link>
                    <HeaderTasksStyle.HeaderTasksAvatar
                        src="/assets/userImageProfile.webp"
                        alt="Avatar"
                    />
                </HeaderTasksStyle.HeaderTasksAvatarContainer>
            </HeaderTasksStyle.HeaderTasksContent>
        </HeaderTasksStyle.HeaderTasksContainer>
    );
};

export default HeaderTasks;