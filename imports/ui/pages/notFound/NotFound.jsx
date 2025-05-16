import React from 'react';
import NotFoundStyles from './notFound.module.jsx';
import Header from '../../components/header/Header.jsx';

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
                <NotFoundStyles.NotFoundButton variant="contained" href="/">
                    Voltar para o início
                </NotFoundStyles.NotFoundButton>
            </NotFoundStyles.NotFoundContent>

        </NotFoundStyles.NotFoundContainer>
    );
};

export default NotFound;