import React from 'react';
import HomeStyle from './home.module.jsx';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Typography } from '@mui/material';

const CardHome = () => {
    return (

        <HomeStyle.CardContainer>

            <HomeStyle.CardTitle variant="h2" gutterBottom >
                Advanced ToDo List
                < br />
                <span style={{ color: 'var(--color-accent)' }}>Synergia</span>{' '}UFMG
            </HomeStyle.CardTitle>

            <HomeStyle.CardText variant="body1" gutterBottom >
                Projeto desenvolvido por Patrick Peres durante o treinamento, utilizando Meteor, React, React Router e Material-UI para criar uma lista de tarefas moderna com autenticação, rotas e dashboard.
            </HomeStyle.CardText>

            <Stack direction="row" spacing={2}>
                <HomeStyle.CardButtonContained
                    variant="contained"
                    color="primary"
                    endIcon={<ArrowForwardIcon />} >
                    Mais Informações
                </HomeStyle.CardButtonContained>

                <HomeStyle.CardButtonOutlined
                    variant="outlined"
                    color="secondary" >
                    Sign In
                </HomeStyle.CardButtonOutlined>
            </Stack>

        </HomeStyle.CardContainer>
    );
};

export default CardHome;