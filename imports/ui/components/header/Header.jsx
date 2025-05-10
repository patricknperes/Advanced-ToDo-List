import React from 'react';
import "./header.module.jsx";
import HeaderStyle from './header.module.jsx';
import Stack from '@mui/material/Stack';
import { Box, Button, styled } from "@mui/material";

const Header = () => {
    return (

        <HeaderStyle.HeaderContainer>
            <HeaderStyle.HeaderContent>
                <HeaderStyle.HeaderImage src="/assets/logoSynergiaLilas.png" alt="Logo" />
                <Stack spacing={2} direction="row">
                    <HeaderStyle.CardButtonOutlined variant="outlined">Sign In</HeaderStyle.CardButtonOutlined>
                    <HeaderStyle.CardButtonText variant="text">Sign Up</HeaderStyle.CardButtonText>
                </Stack>
            </HeaderStyle.HeaderContent>
        </HeaderStyle.HeaderContainer>

    );
};

export default Header;