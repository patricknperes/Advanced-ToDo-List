import React from "react";
import { Box, Button, styled } from "@mui/material";
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
        padding: "8rem 4rem",
        justifyContent: "center",
        rowGap: "var(--mb-1-5)",
        backgroundColor: "var(--container-color)",
        borderRadius: "var(--mb-2)",
        backgroundImage: "url(./public/assets/cardComponent.png)"
    })),

    CardTitle: styled("h1")(({ theme }) => ({
        display: "inline-flex",
        fontSize: "var(--font-size-bigger)",
        fontWeight: "var(--font-semi-bold)",
        color: "var(--title-color)",
    })),

    CardDescription: styled("p")(({ theme }) => ({
        fontSize: "var(--font-size-base)",
        fontWeight: "var(--font-normal)",
        color: "var(--text-color)",
        width: "500px",
    })),

};

export default HomeStyle;