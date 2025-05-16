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
    })),

    NotFoundContent: styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto",
        maxWidth: "1200px",
        padding: "0 2rem 3rem 2rem",
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
        padding: "0.75rem 2rem",
        fontWeight: "var(--font-normal)",
        fontSize: "var(--font-size-base)",
        borderRadius: "100px",
        "&:hover": {
            backgroundColor: "var(--color-accent-dark)",
        },
    })),

}

export default NotFoundStyles;