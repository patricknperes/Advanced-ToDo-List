import React from 'react';
import HomeStyle from './home.module.jsx';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

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

            <HomeStyle.CardButtonContainer>

                <Link to="https://github.com/patricknperes/Advanced-ToDo-List" style={{ textDecoration: 'none' }} target="_blank">
                    <HomeStyle.CardButtonContained
                        variant="contained"
                        color="primary"
                        endIcon={<ArrowForwardIcon />} >
                        Mais Informações
                    </HomeStyle.CardButtonContained>
                </Link>

                <Link to="/login" style={{ textDecoration: 'none' }}>
                    <HomeStyle.CardButtonOutlined
                        variant="outlined"
                        color="secondary" >
                        Sign In
                    </HomeStyle.CardButtonOutlined>
                </Link>
            </HomeStyle.CardButtonContainer>

        </HomeStyle.CardContainer>
    );
};

export default CardHome;