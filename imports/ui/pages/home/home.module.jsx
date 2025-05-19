import React from "react";
import { Box, Button, styled } from "@mui/material";
import { Typography } from '@mui/material';

const HomeStyle = {
    HomeContent: styled(Box)(({ theme }) => ({
        padding: "3rem 0",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        rowGap: "3rem",
        animation: "fadeInPage 1.2s ease-out forwards",
        "@keyframes fadeInPage": {
            "0%": { opacity: 0 },
            "100%": { opacity: 1 },
        },
    })),

    HomeContainer: styled(Box)(({ theme }) => ({
        boxSizing: "border-box",
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 2rem",
        transition: "padding 0.3s ease",
        [theme.breakpoints.down("md")]: {
            padding: "0 1.5rem",
        },
        [theme.breakpoints.down("sm")]: {
            padding: "0 1rem",
        },
    })),

    CardContainer: styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        padding: "8rem 4rem",
        justifyContent: "center",
        backgroundColor: "var(--container-color)",
        borderRadius: "var(--mb-2)",
        backgroundImage: "url(/assets/cardComponent.png), url(/assets/cardBg.png)",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "650px, cover",
        backgroundPosition: "630px 40px, center",
        boxSizing: "border-box",
        width: "100%",
        animation: "slideInCard 1s ease-out forwards",
        willChange: "transform, opacity",
        "@keyframes slideInCard": {
            "0%": { opacity: 0, transform: "translateY(30px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
        },
        [theme.breakpoints.down("md")]: {
            padding: "5rem 3rem",
            backgroundSize: "450px, cover",
            backgroundPosition: "530px 40px, center",
            boxSizing: "border-box",
        },
        [theme.breakpoints.down("sm")]: {
            padding: "2.5rem 2rem",
            backgroundSize: "450px, cover",
            backgroundPosition: "530px 40px, center",
            boxSizing: "border-box",
        },
    })),

    CardTitle: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        fontWeight: "var(--font-semi-bold)",
        color: "var(--title-color)",
        fontSize: "var(--font-size-bigger)",
        animation: "fadeInTitle 1s ease-out 0.3s forwards",
        opacity: 0,
        "@keyframes fadeInTitle": {
            "0%": { opacity: 0, transform: "translateY(15px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "var(--font-size-big)",
            marginBottom: "var(--mb-1)",
        },
    })),

    CardText: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        color: "var(--text-color)",
        maxWidth: "500px",
        marginBottom: "var(--mb-1-5)",
        fontSize: "var(--font-size-base)",
        animation: "fadeInText 1s ease-out 0.5s forwards",
        opacity: 0,
        "@keyframes fadeInText": {
            "0%": { opacity: 0, transform: "translateY(15px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
        },
    })),

    CardButtonContainer: styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        animation: "fadeInButtons 1s ease-out 0.7s forwards",
        opacity: 0,
        "@keyframes fadeInButtons": {
            "0%": { opacity: 0, transform: "translateY(15px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
        },
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            gap: "1rem",
        },
    })),

    CardButtonContained: styled(Button)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        backgroundColor: "var(--color-accent)",
        fontSize: "var(--font-size-medium-small)",
        padding: "0.75rem 1.5rem",
        fontWeight: "var(--font-normal)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
            backgroundColor: "var(--color-accent-dark)",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        },
        [theme.breakpoints.down("sm")]: {
            width: "100%",
        },
    })),

    CardButtonOutlined: styled(Button)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        padding: "0.75rem 1.5rem",
        fontWeight: "var(--font-normal)",
        fontSize: "var(--font-size-medium-small)",
        color: "var(--title-color)",
        borderColor: "var(--title-color)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
            backgroundColor: "var(--body-color)",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        },
        [theme.breakpoints.down("sm")]: {
            width: "100%",
        },
    })),
};

export default HomeStyle;