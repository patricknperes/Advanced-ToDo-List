import React from 'react';
import SignInStyle from './signIn.module';
import Typography from '@mui/material/Typography';
import { Box, styled } from "@mui/material";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Header from '../../components/header/Header.jsx';
import LockIcon from '@mui/icons-material/Lock';


const SignInForm = () => {
    return (
        <Stack spacing={2} sx={{ marginTop: "3rem" }}>
            <SignInStyle.SignInTextField
                id="email"
                label="Email"
                variant="outlined"
                type="email"
                fullWidth
            />
            <SignInStyle.SignInTextField
                id="password"
                label="Senha"
                variant="outlined"
                type="password"
                fullWidth

            />
            <SignInStyle.SignInButtonOutlined variant="contained" color="primary" size="large" endIcon={<ArrowForwardIcon />} fullWidth>
                Iniciar sessão
            </SignInStyle.SignInButtonOutlined>
        </Stack>
    );
}
export default SignInForm;