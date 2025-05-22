import React from "react";
import { Box, Button, styled } from "@mui/material";
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';

const DashboardStyle = {
    DashboardBackground: styled(Box)(({ theme }) => ({
        background: "var(--body-color)",
        animation: "fadeInPage 1.2s ease-out forwards",
        "@keyframes fadeInPage": {
            "0%": { opacity: 0 },
            "100%": { opacity: 1 },
        },
    })),

    DashboardContainer: styled(Box)(({ theme }) => ({
        background: "var(--body-color)",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "3rem 2rem",
        display: "flex",
        flexDirection: "column",
        animation: "slideInContent 1s ease-out forwards",
        opacity: 0,
        willChange: "transform, opacity",
        "@keyframes slideInContent": {
            "0%": { opacity: 0, transform: "translateY(30px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
        },
        [theme.breakpoints.down("md")]: {
            padding: "3rem 1.5rem",
        },
        [theme.breakpoints.down("sm")]: {
            padding: "3rem 1.5rem",
        },
    })),

    DashboardTitleContainer: styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: "var(--mb-2)",
        gap: "1rem",
        animation: "fadeInTitle 1s ease-out 0.2s forwards",
        opacity: 0,
        "@keyframes fadeInTitle": {
            "0%": { opacity: 0, transform: "translateY(15px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
        },
    })),

    DashboardTitle: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        fontWeight: "var(--font-semi-bold)",
        fontSize: "var(--font-size-extra-large)",
        color: "var(--title-color)",
    })),

    DashboardText: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        fontWeight: "var(--font-normal)",
        fontSize: "var(--font-size-larger)",
        color: "var(--title-color)",
        marginBottom: "var(--mb-0-25)",
        animation: "fadeInText 1s ease-out 0.4s forwards",
        opacity: 0,
        "@keyframes fadeInText": {
            "0%": { opacity: 0, transform: "translateY(15px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
        },
        [theme.breakpoints.down("md")]: {
            marginBottom: "0",
        },
    })),

    DashboardCard: styled(Box)(({ theme }) => ({
        background: "var(--color-accent)",
        padding: "3.5rem 3rem",
        borderRadius: "1rem",
        backgroundImage: "url(/assets/synergiaIconePrincipal.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "430px",
        backgroundPosition: "770px center",
        marginBottom: "var(--mb-1-5)",
        animation: "slideInLeft 1s ease-out 0.6s forwards",
        opacity: 0,
        willChange: "transform, opacity",
        "@keyframes slideInLeft": {
            "0%": { opacity: 0, transform: "translateY(15px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
        },
        [theme.breakpoints.down("md")]: {
            backgroundPosition: "center",
            padding: "3rem 2.5rem",
        },
        [theme.breakpoints.down("sm")]: {
            padding: "2.5rem 2rem",
        },
    })),

    DashboardCardTitle: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        fontWeight: "var(--font-normal)",
        fontSize: "var(--font-size-larger)",
        color: "var(--title-color)",
        marginBottom: "var(--mb-1)",
        textTransform: "uppercase",
    })),

    DashboardCardText: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        fontWeight: "var(--font-medium)",
        fontSize: "var(--font-size-extra-large)",
        color: "var(--title-color)",
        marginBottom: "var(--mb-2)",
    })),

    DashboardCardButton: styled(Button)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        backgroundColor: "var(--body-color)",
        padding: "0.75rem 3rem",
        fontWeight: "var(--font-normal)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
            backgroundColor: "var(--container-color)",
            transform: "scale(1.05)",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        },
        [theme.breakpoints.down("sm")]: {
            width: "100%",
        },
    })),

    DashboardStatisticsContainer: styled(Box)(({ theme }) => ({
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
        gap: "1rem",
        animation: "scaleInStats 1s ease-out 0.8s forwards",
        opacity: 0,
        "@keyframes scaleInStats": {
            "0%": { opacity: 0, transform: "scale(0.9)" },
            "100%": { opacity: 1, transform: "scale(1)" },
        },
        [theme.breakpoints.down("md")]: {
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        },
        [theme.breakpoints.down("sm")]: {
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        },
    })),

    DashboardStatisticsCard: styled(Box)(({ theme }) => ({
        backgroundColor: "var(--container-color)",
        padding: "2rem 3rem",
        borderRadius: "1rem",
        animation: "slideInCard 1s ease-out 1s forwards",
        opacity: 0,
        willChange: "transform, opacity",
        "@keyframes slideInCard": {
            "0%": { opacity: 0, transform: "translateY(15px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
        },
    })),

    DashboardStatisticsCardAccent: styled(Box)(({ theme }) => ({
        backgroundColor: "transparent",
        border: "0.5px solid var(--text-color)",
        padding: "2rem 3rem",
        borderRadius: "1rem",
        animation: "slideInCard 1s ease-out 1.2s forwards",
        opacity: 0,
        willChange: "transform, opacity",
        "@keyframes slideInCard": {
            "0%": { opacity: 0, transform: "translateY(15px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
        },
    })),

    DashboardStatisticsTitleContent: styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "var(--mb-1)",
        gap: "1rem",
    })),

    DashboardStatisticsTitle: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        fontWeight: "var(--font-normal)",
        fontSize: "var(--font-size-larger)",
        color: "var(--title-color)",
    })),

    DashboardStatisticsButton: styled(IconButton)(({ theme }) => ({
        borderRadius: "50%",
        color: "var(--body-color)",
        backgroundColor: "var(--title-color)",
        transition: "all 0.5s ease-in-out",
        padding: "0.5rem",
        "&:hover": {
            color: "var(--title-color)",
            backgroundColor: "var(--color-accent)",
            transform: "rotate(-50deg)",
        },
        [theme.breakpoints.down("sm")]: {
            padding: "0.25rem",
        },
    })),

    DashboardStatisticsNumber: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        fontWeight: "var(--font-medium)",
        color: "var(--title-color)",
    })),

    DashboardStatisticsYellow: styled(Button)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        fontSize: "var(--font-size-base)",
        fontWeight: "var(--font-normal)",
        color: "#FFEB3B",
        cursor: "default",
        padding: "0",
        textTransform: "None",
        backgroundColor: "transparent",
        "&:hover": {
            backgroundColor: "transparent",
        },
    })),

    DashboardStatisticsRed: styled(Button)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        fontSize: "var(--font-size-base)",
        fontWeight: "var(--font-normal)",
        color: "#E53935",
        cursor: "default",
        padding: "0",
        textTransform: "None",
        backgroundColor: "transparent",
        "&:hover": {
            backgroundColor: "transparent",
        },
    })),

    DashboardStatisticsGreen: styled(Button)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        fontSize: "var(--font-size-base)",
        fontWeight: "var(--font-normal)",
        color: "#43A047",
        cursor: "default",
        padding: "0",
        textTransform: "None",
        backgroundColor: "transparent",
        "&:hover": {
            backgroundColor: "transparent",
        },
    })),

};

export default DashboardStyle;