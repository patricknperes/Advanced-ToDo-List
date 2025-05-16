import React from 'react';
import UserProfileStyle from './userProfile.module.jsx';
import { InputAdornment } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import WcIcon from '@mui/icons-material/Wc';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CreateIcon from '@mui/icons-material/Create';
import Avatar from '@mui/material/Avatar';

const CardProfile = () => {
    return (
        <UserProfileStyle.UserProfileCard>
            <UserProfileStyle.UserProfileCardLeft>
                <UserProfileStyle.UserProfileCardAvatar
                    alt="Patrick Peres Nicolini"
                    src="/assets/userImageProfile.jpeg"
                />
                <UserProfileStyle.UserProfileTitle variant="h4">
                    Patrick Peres
                </UserProfileStyle.UserProfileTitle>
                <UserProfileStyle.UserProfileTextLeft variant="body1">
                    Manter seus dados atualizados é essencial para garantir uma experiência mais personalizada.
                </UserProfileStyle.UserProfileTextLeft>
                {/* <UserProfileStyle.UserProfileCardButton variant="contained">
                    Synergia
                </UserProfileStyle.UserProfileCardButton> */}

            </UserProfileStyle.UserProfileCardLeft>
            <UserProfileStyle.UserProfileCardRight>
                <UserProfileStyle.UserProfileTitle variant="h3">
                    Editar Perfil
                </UserProfileStyle.UserProfileTitle>
                <UserProfileStyle.UserProfileText variant="body1">
                    Mantenha suas informações atualizadas
                </UserProfileStyle.UserProfileText>

                <UserProfileStyle.UserProfileFormContainer>

                    <UserProfileStyle.UserProfileCardTextField
                        label="Nome"
                        variant="outlined"
                        fullWidth
                        value="Patrick Peres Nicolini"
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonIcon aria-hidden="true" />
                                    </InputAdornment>
                                ),
                            },
                        }}
                        type='text'
                    />
                    <UserProfileStyle.UserProfileCardTextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailIcon aria-hidden="true" />
                                    </InputAdornment>
                                ),
                            },
                        }}
                        value={'patrickperesn@gmail.com'}
                        type='email'
                    />

                    <UserProfileStyle.UserProfileFormLayout>

                        <UserProfileStyle.UserProfileCardTextField
                            label="Gênero"
                            variant="outlined"
                            fullWidth
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <WcIcon aria-hidden="true" />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                            value={'Masculino'}
                            type='text'
                        />

                        <UserProfileStyle.UserProfileCardTextField
                            label="Data de Nascimento"
                            variant="outlined"
                            fullWidth
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <CalendarMonthIcon aria-hidden="true" />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                            value={'20/10/2000'}
                            type='date'
                        />

                    </UserProfileStyle.UserProfileFormLayout>

                    <UserProfileStyle.UserProfileCardTextField
                        label="Empresa"
                        variant="outlined"
                        fullWidth
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <WorkIcon aria-hidden="true" />
                                    </InputAdornment>
                                ),
                            },
                        }}
                        value={'Synergia'}
                        type='text'
                    />

                    <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                        <UserProfileStyle.UserProfileCardButtonOutlined
                            variant="contained"
                            startIcon={<CreateIcon />}

                        >
                            Editar
                        </UserProfileStyle.UserProfileCardButtonOutlined>
                    </div>

                </UserProfileStyle.UserProfileFormContainer>
            </UserProfileStyle.UserProfileCardRight>
        </UserProfileStyle.UserProfileCard>
    );
};

export default CardProfile;