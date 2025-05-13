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
                <div className="carousel-desktop-only">
                    <MeuCarrossel />
                </div>

            </HomeStyle.HomeContent>

            <style jsx>{`
                .carousel-desktop-only {
                    display: none;
                }
                @media (min-width: 899px) {
                    .carousel-desktop-only {
                        display: block;
                    }
                }
            `}</style>
        </>
    );
};

export default Home