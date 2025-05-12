import React from "react";
import SignUpStyle from "./signUp.module";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import HttpsIcon from '@mui/icons-material/Https';
import WcIcon from '@mui/icons-material/Wc';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const SignUpForm = () => {
    return (
        <SignUpStyle.SignUpFormContainer component="form" >
            <SignUpStyle.SignUpTextField
                id="name"
                label="Nome"
                variant="outlined"
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <PersonIcon />
                            </InputAdornment>
                        ),
                    },
                }}
                placeholder="Digite seu nome"
                type="text"
                fullWidth
            />

            <SignUpStyle.SignUpTextField
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
                placeholder="Digite seu email"
                type="email"
                fullWidth
            />

            <SignUpStyle.SignUpFormLayout>
                <SignUpStyle.SignUpTextField
                    id="sexo"
                    label="Sexo"
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <WcIcon />
                                </InputAdornment>
                            ),
                        },
                    }}
                    variant="outlined"
                    placeholder="Selecione seu sexo"
                    type="text"
                    fullWidth
                />

                <SignUpStyle.SignUpTextField
                    id="birthdate"
                    label="Data de Nascimento"
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <CalendarMonthIcon />
                                </InputAdornment>
                            ),
                        },
                    }}
                    variant="outlined"
                    type="date"
                    fullWidth
                />
            </SignUpStyle.SignUpFormLayout>


            <SignUpStyle.SignUpTextField
                id="empresa"
                label="Empresa"
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <WorkIcon />
                            </InputAdornment>
                        ),
                    },
                }}
                variant="outlined"
                placeholder="Digite o nome da sua empresa"
                type="text"
                fullWidth
            />

            <SignUpStyle.SignUpFormLayout>
                <SignUpStyle.SignUpTextField
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
                    placeholder="Digite sua senha"
                    type="password"
                    fullWidth
                />

                <SignUpStyle.SignUpTextField
                    id="confirmPassword"
                    label="Confirme sua senha"
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
                    placeholder="Digite novamente "
                    type="password"
                    fullWidth
                />
            </SignUpStyle.SignUpFormLayout>

            <SignUpStyle.SignUpButtonOutlined variant="contained" color="primary" size="large" fullWidth endIcon={<ArrowForwardIcon />} >
                Cadastrar
            </SignUpStyle.SignUpButtonOutlined>
        </SignUpStyle.SignUpFormContainer >
    );
}

export default SignUpForm;