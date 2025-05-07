import React from "react";
import { Box, styled } from "@mui/material";
import Home from "./Home";

const HomeStyle = {

    HomeContainer: styled(Box)(({ theme }) => ({
        width: "1200px",
        margin: "0 auto",
        padding: "6rem 2rem",
    })),

    CardContainer: styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "570px",
        padding: "30px 60px",
        justifyContent: "center",
        rowGap: "var(--mb-2)",
        backgroundColor: "var(--container-color)",
    })),

    CardTitle: styled("h1")(({ theme }) => ({
        display: "inline-flex",
        fontSize: "var(--font-size-bigger)",
        fontWeight: "var(--font-semi-bold)",
        color: "var(--title-color)",
    })),

    CardTitleAccent: styled("h1")(({ theme }) => ({
        fontSize: "var(--font-size-bigger)",
        fontWeight: "var(--font-semi-bold)",
        color: "var(--color-accent)",
    })),


    CardDescription: styled("p")(({ theme }) => ({
        fontSize: "var(--font-size-base)",
        fontWeight: "var(--font-normal)",
        color: "var(--text-color)",
    })),


};

export default HomeStyle;