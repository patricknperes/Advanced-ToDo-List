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
    })),

    HomeContainer: styled(Box)(({ theme }) => ({
        boxSizing: "border-box",
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 2rem",
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
    })),

    CardTitle: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        fontWeight: "var(--font-semi-bold)",
        color: "var(--title-color)",
    })),

    CardText: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        color: "var(--text-color)",
        maxWidth: "500px",
        marginBottom: "var(--mb-1-5)",
    })),

    CardButtonContained: styled(Button)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        backgroundColor: "var(--color-accent)",
        padding: "0.75rem 1.5rem",
        fontWeight: "var(--font-normal)",
        "&:hover": {
            backgroundColor: "var(--color-accent-dark)",
        },
    })),

    CardButtonOutlined: styled(Button)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        padding: "0.75rem 1.5rem",
        fontWeight: "var(--font-normal)",
        color: "var(--new-button-color)",
        borderColor: "var(--new-button-color)",
        "&:hover": {
            backgroundColor: "var(--body-color)",
        },
    })),
};

export default HomeStyle;