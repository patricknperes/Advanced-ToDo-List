import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

// Definindo os estilos com styled-components do Material-UI
const LogosContainer = styled(Box)(({ theme }) => ({
    overflow: 'hidden',
    padding: '20px 0',
    background: 'transparent',
    whiteSpace: 'nowrap',
    position: 'relative',
    width: '100%',
    boxSizing: 'border-box',
    '&:before, &:after': {
        position: 'absolute',
        top: 0,
        width: '250px',
        height: '100%',
        content: '""',
        zIndex: 2,
    },
    '&:before': {
        left: 0,
        background: 'linear-gradient(to left, rgba(255, 255, 255, 0), transparent)',
    },
    '&:after': {
        right: 0,
        background: 'linear-gradient(to right, rgba(255, 255, 255, 0), transparent)',
    },
    '&:hover .logos-slide': {
        animationPlayState: 'paused',
    },
    [theme.breakpoints.down('md')]: {
        padding: '15px 0',
        '&:before, &:after': {
            width: '120px',
        },
    },
    [theme.breakpoints.down('sm')]: {
        padding: '10px 0',
        '&:before, &:after': {
            width: '60px',
        },
    },
}));

const LogosSlide = styled(Box)(({ theme }) => ({
    display: 'inline-block',
    animation: '35s slide infinite linear',
    '@keyframes slide': {
        from: {
            transform: 'translateX(0)',
        },
        to: {
            transform: 'translateX(-100%)',
        },
    },
    '& img': {
        height: '40px',
        margin: '0 40px',
    },
}));

// Componente React
const LogosCarousel = () => {
    // Lista de logos (pode ser movida para uma constante externa ou prop)
    const logos = [
        // './assets/icons/css.png',
        // './assets/icons/html.png',
        './assets/icons/js.png',
        './assets/icons/materialUi.png',
        './assets/icons/meteor.png',
        './assets/icons/mongoDb.png',
        './assets/icons/react.png',
    ];

    return (
        <LogosContainer className="logos">
            {/* Primeiro slide */}
            <LogosSlide className="logos-slide">
                {logos.map((logo, index) => (
                    <img key={`logo-1-${index}`} src={logo} alt={`Logo ${index + 1}`} />
                ))}
            </LogosSlide>
            {/* Segundo slide para efeito contínuo */}
            <LogosSlide className="logos-slide">
                {logos.map((logo, index) => (
                    <img key={`logo-2-${index}`} src={logo} alt={`Logo ${index + 1}`} />
                ))}
            </LogosSlide>
        </LogosContainer>
    );
};

export default LogosCarousel;