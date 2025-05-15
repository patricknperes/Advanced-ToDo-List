import React from "react";
import { Box, styled } from "@mui/material";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const NotFoundStyles = {

    NotFoundContainer: styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage: "url(/assets/404.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    })),

    NotFound404: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        fontWeight: "var(--font-bold)",
        fontSize: "14rem",
        color: "var(--color-accent)",
    })),

    NotFoundTitle: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        fontWeight: "var(--font-semi-bold)",
        fontSize: "var(--font-size-extra-large)",
        color: "var(--title-color)",
    })),

    NotFoundText: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        fontWeight: "var(--font-regular)",
        fontSize: "var(--font-size-larger)",
        color: "var(--text-color)",
        marginBottom: "var(--mb-3)",
    })),

    NotFoundButton: styled(Button)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        backgroundColor: "var(--color-accent)",
        padding: "0.75rem 1.5rem",
        fontWeight: "var(--font-normal)",
        fontSize: "var(--font-size-base)",
        "&:hover": {
            backgroundColor: "var(--color-accent-dark)",
        },
    })),

}

export default NotFoundStyles;