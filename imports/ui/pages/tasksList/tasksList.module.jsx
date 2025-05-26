import React from "react";
import { Box, Button, styled, Chip, TextField, FormControl, Select, Typography, Tooltip } from "@mui/material";

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
        alignItems: "center",
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
        gap: "var(--mb-0-5)",
        alignItems: "center",
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
        borderBottom: "0.1px solid rgba(183, 183, 183, 0.5)",
    })),

    TasksListLabelTitle: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        fontSize: "var(--font-size-base)",
        color: "var(--text-color)",
        display: "flex",
        justifyContent: "center",
    })),

    // ========== Label Left ==========

    TasksListLabelLeft: styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        gap: "var(--mb-0-25)",
        alignItems: "center",
    })),

    // ========== Label Rigth ==========

    TasksListLabelRigth: styled(Box)(({ theme }) => ({
        display: "grid",
        gridTemplateColumns: "repeat(3, 130px)",
        flexDirection: "row",
        gap: "1rem",
        alignItems: "center",
    })),

    // ========== Task Componet Style ==========

    TasksListComponetContainer: styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "1.25rem 0",
        borderBottom: "0.1px solid rgba(183, 183, 183, 0.5)",
        "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.04)",
        },
    })),

    TasksListComponetTitle: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        fontSize: "var(--font-size-base)",
        color: "var(--title-color)",
        display: "flex",
        justifyContent: "center",
    })),

    // ========== Componet Left ==========

    TasksListComponetLeft: styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "var(--mb-0-25)",
    })),

    // ========== Componet Rigth ==========

    TasksListComponetRigth: styled(Box)(({ theme }) => ({
        display: "grid",
        gridTemplateColumns: "repeat(3, 130px)",
        flexDirection: "row",
        gap: "1rem",
        alignItems: "center",
    })),

    TasksListComponetFormControl: styled(FormControl)(({ theme }) => ({
        width: "100%",
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--title-color)",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--title-color)",
        },
    })),

    TasksListComponetSelect: styled(Select)(({ theme }) => ({
        height: "2rem",
        color: "var(--text-color)",
        fontSize: "var(--font-size-base)",
        fontFamily: "var(--font-family)",
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--text-color)",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--title-color)",
        },
    })),

    TasksListComponetButtonContent: styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        gap: "0.5rem",
    })),

    // ========== Task Not Found ==========

    TasksListNotFoundContainer: styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2.5rem 2rem",
        textAlign: "center",
    })),

    TasksListNotFoundImage: styled(Box)(({ theme }) => ({
        width: "100%",
        maxWidth: "650px",
        height: "auto",
        marginBottom: "var(--mb-2)",
    })),

    TasksListNotFoundText: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        fontSize: "var(--font-size-larger)",
        color: "var(--title-color)",
        textTransform: "uppercase",
        marginTop: "1rem",
    })),

    // ========== isLoading ==========

    TasksListLoadingContainer: styled(Box)(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2.5rem 2rem",
        backgroundColor: "var(--container-color)",
    })),

    TasksListLoadingText: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        fontSize: "var(--font-size-base)",
        color: "var(--title-color)",
        marginLeft: "1rem",
    })),

    // ========== Tooltip ==========

    TasksListTooltip: styled(({ className, ...props }) => (
        <Tooltip
            {...props}
            classes={{ tooltip: className }}
        />
    ))(({ theme }) => ({
        fontFamily: "var(--font-family)",
        fontSize: "var(--font-size-base)",
        color: "var(--title-color)",
        backgroundColor: "var(--body-color)",
        padding: "1rem",
        borderRadius: "0.75rem",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        maxWidth: 350,
        lineHeight: 1.6,
        fontWeight: 400,
        textAlign: "left",
    })),


};

export default TasksListStyle;