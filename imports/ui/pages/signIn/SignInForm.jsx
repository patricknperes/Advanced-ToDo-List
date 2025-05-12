import React from 'react';
import SignInStyle from './signIn.module';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';

const SignInForm = () => {
    return (
        <SignInStyle.SigninFormContainer component="form" >
            <SignInStyle.SignInTextField
                id="email"
                label="Email"
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <EmailIcon />
                            </InputAdornment>
                        ),
                    },
                }}
                variant="outlined"
                placeholder='Digite seu email'
                type="email"
                fullWidth
            />
            <SignInStyle.SignInTextField
                id="password"
                label="Senha"
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <HttpsIcon />
                            </InputAdornment>
                        ),
                    },
                }}
                variant="outlined"
                placeholder='Digite sua senha'
                type="password"
                fullWidth

            />
            <SignInStyle.SignInButtonOutlined variant="contained" color="primary" size="large" endIcon={<ArrowForwardIcon />} fullWidth>
                Iniciar sessão
            </SignInStyle.SignInButtonOutlined>
        </SignInStyle.SigninFormContainer>
    );
}
export default SignInForm;