import React from 'react';
import NotFoundStyles from './notFound.module.jsx';
import Header from '../../components/header/Header.jsx';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (

        <NotFoundStyles.NotFoundContainer>

            <Header />

            <NotFoundStyles.NotFoundContent>
                <NotFoundStyles.NotFound404>404</NotFoundStyles.NotFound404>
                <NotFoundStyles.NotFoundTitle>Página não encontrada</NotFoundStyles.NotFoundTitle>
                <NotFoundStyles.NotFoundText>
                    Desculpe, a página que você está procurando não existe.
                </NotFoundStyles.NotFoundText>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <NotFoundStyles.NotFoundButton variant="contained">
                        Voltar para o início
                    </NotFoundStyles.NotFoundButton>
                </Link>
            </NotFoundStyles.NotFoundContent>

        </NotFoundStyles.NotFoundContainer>
    );
};

export default NotFound;