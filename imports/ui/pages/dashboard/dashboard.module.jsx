import React from "react";
import { Box, Button, styled } from "@mui/material";
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Dashboard from "./Dashboard";

const DashboardStyle = {
    DashboardContainer: styled(Box)(({ theme }) => ({
        backgroundColor: "var(--body-color)",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "3rem 2rem",
        display: "flex",
        flexDirection: "column",
    })),

    DashboardTitle: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        fontWeight: "var(--font-semi-bold)",
        color: "var(--title-color)",
        marginBottom: "var(--mb-2)",
    })),

    DashboardText: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        fontWeight: "var(--font-normal)",
        color: "var(--title-color)",
        marginBottom: "var(--mb-0-25)",
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
    })),

    DashboardCardTitle: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        fontWeight: "var(--font-normal)",
        color: "var(--title-color)",
        marginBottom: "var(--mb-1)",
        textTransform: "uppercase",
    })),

    DashboardCardText: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        fontWeight: "var(--font-medium)",
        color: "var(--title-color)",
        marginBottom: "var(--mb-2)",
    })),

    DashboardCardButton: styled(Button)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        backgroundColor: "var(--body-color)",
        padding: "0.75rem 1.5rem",
        fontWeight: "var(--font-normal)",
        "&:hover": {
            backgroundColor: "var(--container-color)",
        },
    })),

    DashboardStatisticsContainer: styled(Box)(({ theme }) => ({
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "1rem",
    })),

    DashboardStatisticsCard: styled(Box)(({ theme }) => ({
        backgroundColor: "var(--container-color)",
        padding: "2rem 3rem",
        borderRadius: "1rem",
    })),

    DashboardStatisticsCardAccent: styled(Box)(({ theme }) => ({
        backgroundColor: "transparent",
        border: "0.5px solid var(--text-color)",
        padding: "2rem 3rem",
        borderRadius: "1rem",
    })),

    DashboardStatisticsTitleContent: styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "var(--mb-1)",
    })),

    DashboardStatisticsTitle: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        fontWeight: "var(--font-normal)",
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