import React from 'react';
import HomeStyle from './home.module.jsx';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const CardHome = () => {
    return (
        <HomeStyle.CardContainer>
            <HomeStyle.CardTitle>
                Advanced ToDo List <HomeStyle.CardTitleAccent>Synergia</HomeStyle.CardTitleAccent> UFMG
            </HomeStyle.CardTitle>
            <HomeStyle.CardDescription>
                Projeto desenvolvido por Patrick Peres durante o treinamento, utilizando Meteor, React, React Router e Material-UI para criar uma lista de tarefas moderna com autenticação, rotas e dashboard.
            </HomeStyle.CardDescription>

            <Stack direction="row" spacing={2}>
                <Button variant="contained" color="primary" endIcon={<ArrowForwardIcon />}>
                    Mais Informações
                </Button>
                <Button variant="outlined" color="secondary">
                    Sign In
                </Button>
            </Stack>

        </HomeStyle.CardContainer>
    );
};

export default CardHome;