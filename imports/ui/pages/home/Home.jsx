import React from 'react';
import "./home.module.jsx";
import CardHome from './CardHome.jsx';
import HomeStyle from './home.module.jsx';
import Header from '../../components/header/Header.jsx';
import MeuCarrossel from './Carousel.jsx';

const Home = () => {
    return (
        <>
            <Header />

            <HomeStyle.HomeContent>

                <HomeStyle.HomeContainer>
                    <CardHome />
                </HomeStyle.HomeContainer>
                <MeuCarrossel />

            </HomeStyle.HomeContent>

        </>
    );
};

export default Home