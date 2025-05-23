import React from "react";
import { Box, Button, styled, Chip, TextField } from "@mui/material";
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

    TasksContainer: styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        color: "var(--title-color)",
        background: "var(--container-color)",
        padding: "2.5rem 2rem",
        borderRadius: "1rem",
    })),

    // ========== Menu ==========

    TasksListMenu: styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: "var(--mb-2-5)",
    })),

    // ========== Menu Left ==========

    TasksListMenuLeft: styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
    })),

    TasksListMenuChip: styled(Chip)(({ theme }) => ({
        color: "var(--text-color)",
        fontFamily: "var(--font-family)",
        fontWeight: "var(--font-normal)",
        fontSize: "var(--font-size-base)",
        gap: "var(--mb-0-25)",
        padding: "1.3rem 1rem",
        borderRadius: "0.5rem",
        "&.MuiChip-outlined": {
            borderColor: "var(--text-color)",
            color: "var(--text-color)",
        },
        "&.MuiChip-filled": {
            borderColor: "var(--title-color)",
            color: "var(--title-color)",
        },
    })),

    TasksListMenuSearchBar: styled(TextField)(({ theme }) => ({
        color: "var(--text-color)",
        fontFamily: "var(--font-family)",
        fontWeight: "var(--font-normal)",
        fontSize: "var(--font-size-base)",
        gap: "var(--mb-0-25)",
        height: "2.75rem",
        "& .MuiOutlinedInput-root": {
            borderColor: "var(--text-color)",
            height: "100%",
            color: "var(--text-color)",
            "& fieldset": {
                borderColor: "var(--text-color)",
            },
            "&:hover fieldset": {
                borderColor: "var(--title-color)",
            },
            "&.Mui-focused fieldset": {
                borderColor: "var(--title-color)",
            },
        },
    })),

    // ========== Menu Right ==========

    TasksListMenuRight: styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
    })),

    TasksListMenuButton: styled(Button)(({ theme }) => ({
        background: "var(--color-accent)",
        color: "var(--title-color)",
        fontFamily: "var(--font-family)",
        borderRadius: "0.5rem",
        "&.MuiButton-outlined": {
            borderColor: "var(--title-color)",
            color: "var(--title-color)",
        },
    })),

    // ========== Label ==========

    TasksListLabelContainer: styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: "var(--mb-1)",
        borderBottom: "0.1px solid var(--text-color)",
    })),

    TasksListLabelTitle: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        fontSize: "var(--font-size-base)",
        color: "var(--title-color)",
        display: "flex",
        justifyContent: "center",
    })),

    // ========== Label Left ==========

    TasksListLabelLeft: styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
    })),

    // ========== Label Rigth ==========

    TasksListLabelRigth: styled(Box)(({ theme }) => ({
        display: "grid",
        gridTemplateColumns: "repeat(3, 130px)",
        flexDirection: "row",
        gap: "1rem",
    })),

};

export default TasksListStyle;