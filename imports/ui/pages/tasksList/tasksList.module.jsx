import React from "react";
import { Box, Button, styled } from "@mui/material";
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';


const TasksListStyle = {

    TasksListBackground: styled(Box)(({ theme }) => ({
        background: "var(--body-color)",
    })),

    TasksListContainer: styled(Box)(({ theme }) => ({
        background: "var(--body-color)",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "3rem 2rem",
        display: "flex",
        flexDirection: "column",
    })),

    TasksListTitleContainer: styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: "var(--mb-2)",
        gap: "1rem",
    })),

    TasksListTitle: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        fontWeight: "var(--font-semi-bold)",
        color: "var(--title-color)",
    })),

    TasksListText: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        fontWeight: "var(--font-normal)",
        color: "var(--title-color)",
        marginBottom: "var(--mb-0-25)",
    })),

};

export default TasksListStyle;