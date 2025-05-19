import React from "react";
import { Box, styled } from "@mui/material";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const NotFoundStyles = {
    NotFoundContainer: styled(Box)(({ theme }) => ({
        backgroundImage: "url(/assets/404.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        animation: "fadeInPage 1.2s ease-out forwards",
        "@keyframes fadeInPage": {
            "0%": { opacity: 0 },
            "100%": { opacity: 1 },
        },
    })),

    NotFoundContent: styled(Box)(({ theme }) => ({
        display: "flex",
        minHeight: "80vh",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto",
        maxWidth: "1200px",
        padding: "0 2rem 3rem 2rem",
        animation: "slideInContent 1s ease-out forwards",
        opacity: 0,
        willChange: "transform, opacity",
        "@keyframes slideInContent": {
            "0%": { opacity: 0, transform: "translateY(30px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
        },
        [theme.breakpoints.down("sm")]: {
            minHeight: "90vh",
        },
    })),

    NotFound404: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        fontWeight: "var(--font-bold)",
        fontSize: "14rem",
        color: "var(--color-accent)",
        animation: "scaleIn404 1s ease-out 0.2s forwards",
        opacity: 0,
        willChange: "transform, opacity",
        "@keyframes scaleIn404": {
            "0%": { opacity: 0, transform: "translateY(15px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
        },
        [theme.breakpoints.down("md")]: {
            fontSize: "10rem",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "8rem",
        },
    })),

    NotFoundTitle: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        fontWeight: "var(--font-semi-bold)",
        fontSize: "var(--font-size-extra-large)",
        color: "var(--title-color)",
        textAlign: "center",
        animation: "fadeInTitle 1s ease-out 0.4s forwards",
        opacity: 0,
        "@keyframes fadeInTitle": {
            "0%": { opacity: 0, transform: "translateY(15px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
        },
        [theme.breakpoints.down("sm")]: {
            marginBottom: "var(--mb-0-5)",
        },
    })),

    NotFoundText: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        fontWeight: "var(--font-regular)",
        fontSize: "var(--font-size-larger)",
        color: "var(--text-color)",
        marginBottom: "var(--mb-3)",
        textAlign: "center",
        animation: "fadeInText 1s ease-out 0.6s forwards",
        opacity: 0,
        "@keyframes fadeInText": {
            "0%": { opacity: 0, transform: "translateY(15px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "var(--font-size-large)",
        },
    })),

    NotFoundButton: styled(Button)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        backgroundColor: "var(--color-accent)",
        padding: "0.75rem 2rem",
        fontWeight: "var(--font-normal)",
        fontSize: "var(--font-size-base)",
        borderRadius: "100px",
        animation: "fadeInText 1s ease-out 0.8s forwards",
        opacity: 0,
        "@keyframes fadeInText": {
            "0%": { opacity: 0, transform: "translateY(15px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "&:hover": {
            backgroundColor: "var(--color-accent-dark)",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        },
        [theme.breakpoints.down("md")]: {
            fontSize: "var(--font-size-medium)",
            padding: "0.75rem 1.5rem",
        },
    })),
};

export default NotFoundStyles;