import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Define styles using Material-UI's makeStyles
const useStyles = makeStyles({
    body: {
        height: '100vh',
        background: 'linear-gradient(180deg, #18191A, #2B2C2D)',
        overflow: 'hidden',
        position: 'relative',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
    },
    particle: {
        position: 'absolute',
        backgroundColor: 'white',
        borderRadius: '50%',
        opacity: 0.8,
        animation: '$float linear infinite',
    },
    cross: {
        position: 'absolute',
        color: 'white',
        fontSize: '10px',
        opacity: 0.6,
        animation: '$float linear infinite',
    },
    '@keyframes float': {
        '0%': {
            transform: 'translateY(0)',
            opacity: 0.5,
        },
        '100%': {
            transform: 'translateY(-100vh)',
            opacity: 0,
        },
    },
});

// Particle component
const Particle = ({ size, left, top, animationDuration }) => {
    const classes = useStyles();
    return (
        <div
            className={classes.particle}
            style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}vw`,
                top: `${top}vh`,
                animationDuration: `${animationDuration}s`,
            }}
        />
    );
};

// Cross component
const Cross = ({ size, left, top, animationDuration }) => {
    const classes = useStyles();
    return (
        <div
            className={classes.cross}
            style={{
                left: `${left}vw`,
                top: `${top}vh`,
                fontSize: `${size}px`,
                animationDuration: `${animationDuration}s`,
            }}
        >
            +
        </div>
    );
};

// SpaceBackground component
const SpaceBackground = () => {
    const classes = useStyles();
    const totalParticles = 50;
    const totalCrosses = 15;
    const [particles, setParticles] = React.useState([]);
    const [crosses, setCrosses] = React.useState([]);

    useEffect(() => {
        // Generate particles
        const newParticles = [];
        for (let i = 0; i < totalParticles; i++) {
            const size = Math.random() * 4 + 2;
            newParticles.push({
                id: `particle-${i}`,
                size,
                left: Math.random() * 100,
                top: Math.random() * 100,
                animationDuration: 15 + Math.random() * 10,
            });
        }
        setParticles(newParticles);

        // Generate crosses
        const newCrosses = [];
        for (let i = 0; i < totalCrosses; i++) {
            newCrosses.push({
                id: `cross-${i}`,
                size: Math.random() * 8 + 8,
                left: Math.random() * 100,
                top: Math.random() * 100,
                animationDuration: 20 + Math.random() * 10,
            });
        }
        setCrosses(newCrosses);
    }, []);

    return (
        <div className={classes.body}>
            {particles.map((p) => (
                <Particle
                    key={p.id}
                    size={p.size}
                    left={p.left}
                    top={p.top}
                    animationDuration={p.animationDuration}
                />
            ))}
            {crosses.map((c) => (
                <Cross
                    key={c.id}
                    size={c.size}
                    left={c.left}
                    top={c.top}
                    animationDuration={c.animationDuration}
                />
            ))}
        </div>
    );
};

export default SpaceBackground;