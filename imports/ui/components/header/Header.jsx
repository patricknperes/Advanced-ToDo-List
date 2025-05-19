import React from 'react';
import "./header.module.jsx";
import HeaderStyle from './header.module.jsx';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <HeaderStyle.HeaderContainer>
            <HeaderStyle.HeaderContent>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <HeaderStyle.HeaderImage src="/assets/logoSynergiaLilas.png" alt="Logo" />
                </Link>
                <Stack
                    spacing={{ xs: 1, sm: 2 }}
                    direction="row"
                >
                    <Link to="/login" style={{ textDecoration: 'none' }}>
                        <HeaderStyle.CardButtonOutlined variant="outlined">Sign In</HeaderStyle.CardButtonOutlined>
                    </Link>
                    <Link to="/register" style={{ textDecoration: 'none' }}>
                        <HeaderStyle.CardButtonText variant="text">Sign Up</HeaderStyle.CardButtonText>
                    </Link>
                </Stack>
            </HeaderStyle.HeaderContent>
        </HeaderStyle.HeaderContainer>
    );
};

export default Header;