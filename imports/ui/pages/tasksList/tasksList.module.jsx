import React from "react";
import { Box, Button, styled, Chip, TextField, FormControl, Select, Typography, Tooltip } from "@mui/material";

const TasksListStyle = {
    TasksListBackground: styled(Box)(({ theme }) => ({
        background: "var(--body-color)",
        animation: "fadeInPage 1.2s ease-out forwards",
        "@keyframes fadeInPage": {
            "0%": { opacity: 0 },
            "100%": { opacity: 1 },
        },
    })),

    TasksListContainer: styled(Box)(({ theme }) => ({
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

    TasksListTitleContainer: styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: "var(--mb-2)",
        gap: "1rem",
        animation: "fadeInTitle 1s ease-out 0.4s forwards",
        opacity: 0,
        "@keyframes fadeInTitle": {
            "0%": { opacity: 0, transform: "translateY(15px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
        },
    })),

    TasksListTitle: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        fontWeight: "var(--font-semi-bold)",
        fontSize: "var(--font-size-extra-large)",
        color: "var(--title-color)",
    })),

    TasksListText: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        fontWeight: "var(--font-normal)",
        fontSize: "var(--font-size-larger)",
        color: "var(--title-color)",
        marginBottom: "var(--mb-0-25)",
        animation: "fadeInText 1s ease-out 0.2s forwards",
        opacity: 0,
        "@keyframes fadeInText": {
            "0%": { opacity: 0, transform: "translateY(15px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
        },
        [theme.breakpoints.down("md")]: {
            marginBottom: "0",
        },
    })),

    TasksContainer: styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        color: "var(--title-color)",
        background: "var(--container-color)",
        padding: "2.5rem 2rem",
        borderRadius: "1rem",
        animation: "slideInUnified 1s ease-out 0.2s forwards",
        opacity: 0,
        willChange: "transform, opacity",
        "@keyframes slideInUnified": {
            "0%": { opacity: 0, transform: "translateY(30px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
        },
    })),

    // ========== Menu ==========

    TasksListMenu: styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: "var(--mb-2-5)",
        animation: "slideInUnified 1s ease-out 0.2s forwards",
        opacity: 0,
        willChange: "transform, opacity",
        "@keyframes slideInUnified": {
            "0%": { opacity: 0, transform: "translateY(15px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
        },
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            gap: "1rem",
        },
    })),

    // ========== Menu Left ==========

    TasksListMenuLeft: styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
            flexDirection: 'column-reverse',
        },
    })),

    TasksListMenuChip: styled(Chip)(({ theme }) => ({
        color: "var(--text-color)",
        fontFamily: "var(--font-family)",
        fontWeight: "var(--font-normal)",
        fontSize: "var(--font-size-base)",
        gap: "var(--mb-0-25)",
        padding: "1.3rem 1rem",
        borderRadius: "0.5rem",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&.MuiChip-outlined": {
            borderColor: "var(--text-color)",
            color: "var(--text-color)",
        },
        "&.MuiChip-filled": {
            border: "1px solid var(--title-color)",
            borderColor: "var(--title-color)",
            backgroundColor: "var(--container-color)",
            color: "var(--title-color)",
        },
        "&:hover": {
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        },
        [theme.breakpoints.down("sm")]: {
            width: '100%',
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
        [theme.breakpoints.down("md")]: {
        },
        [theme.breakpoints.down("sm")]: {
            flexDirection: 'row-reverse',
            order: '0',
        },
    })),

    TasksListMenuButton: styled(Button)(({ theme }) => ({
        background: "var(--color-accent)",
        color: "var(--title-color)",
        fontFamily: "var(--font-family)",
        borderRadius: "0.5rem",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&.MuiButton-outlined": {
            borderColor: "var(--title-color)",
            color: "var(--title-color)",
        },
        "&:hover": {
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        },
        [theme.breakpoints.down("md")]: {
            fontSize: "var(--font-size-base)",
        },
        [theme.breakpoints.down("sm")]: {
            width: '100%',
        },
    })),

    // ========== Label ==========

    TasksListLabelContainer: styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: "var(--mb-1)",
        gap: "1rem",
        borderBottom: "0.1px solid rgba(183, 183, 183, 0.5)",
        animation: "slideInUnified 1s ease-out 0.2s forwards",
        opacity: 0,
        willChange: "transform, opacity",
        "@keyframes slideInUnified": {
            "0%": { opacity: 0, transform: "translateY(15px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
        },
        [theme.breakpoints.down("sm")]: {
            flexDirection: "row",
        },
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

    // ========== Label Right ==========

    TasksListLabelRigth: styled(Box)(({ theme }) => ({
        display: "grid",
        gridTemplateColumns: "repeat(3, 130px)",
        flexDirection: "row",
        gap: "1rem",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
            gridTemplateColumns: "repeat(3, 80px)",
        },
        [theme.breakpoints.down("sm")]: {
            gridTemplateColumns: "repeat(1, 150px)",
            gap: "0.25rem",
        },
        '@media (max-width: 450px)': {
            gridTemplateColumns: "repeat(1, 100px)",
        },
    })),

    // ========== Task Component Style ==========

    TasksListComponetContainer: styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "1.25rem 0",
        gap: "1rem",
        borderBottom: "0.1px solid rgba(183, 183, 183, 0.5)",
        animation: "slideInUnified 1s ease-out 0.2s forwards",
        opacity: 0,
        willChange: "transform, opacity",
        "@keyframes slideInUnified": {
            "0%": { opacity: 0, transform: "translateY(15px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.04)",
        },
        [theme.breakpoints.down("sm")]: {
            flexDirection: "row",
        },
    })),

    TasksListComponetTitle: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        fontSize: "var(--font-size-base)",
        color: "var(--title-color)",
        display: "flex",
        justifyContent: "center",
    })),

    // ========== Component Left ==========

    TasksListComponetLeft: styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "var(--mb-0-25)",
    })),

    // ========== Component Right ==========

    TasksListComponetRigth: styled(Box)(({ theme }) => ({
        display: "grid",
        gridTemplateColumns: "repeat(3, 130px)",
        flexDirection: "row",
        gap: "1rem",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
            gridTemplateColumns: "repeat(3, 80px)",
        },
        [theme.breakpoints.down("sm")]: {
            gridTemplateColumns: "repeat(1, 150px)",
        },
        '@media (max-width: 450px)': {
            gridTemplateColumns: "repeat(1, 100px)",
        },
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
        [theme.breakpoints.down("md")]: {
            gap: "0.25rem",
        },
    })),

    // ========== Task Not Found ==========

    TasksListNotFoundContainer: styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2.5rem 2rem",
        textAlign: "center",
        animation: "slideInUnified 1s ease-out 0.2s forwards",
        opacity: 0,
        willChange: "transform, opacity",
        "@keyframes slideInUnified": {
            "0%": { opacity: 0, transform: "translateY(15px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
        },
    })),

    TasksListNotFoundImage: styled(Box)(({ theme }) => ({
        width: "100%",
        maxWidth: "650px",
        height: "auto",
        // marginBottom: "var(--mb-2)",
        animation: "fadeInImage 1s ease-out 0.2s forwards",
        opacity: 0,
        "@keyframes fadeInImage": {
            "0%": { opacity: 0, transform: "translateY(20px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
        },
    })),

    TasksListNotFoundText: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        fontSize: "var(--font-size-larger)",
        color: "var(--title-color)",
        textTransform: "uppercase",
        // marginTop: "1rem",
        animation: "slideInUnified 1s ease-out 0.2s forwards",
        opacity: 0,
        willChange: "transform, opacity",
        "@keyframes slideInUnified": {
            "0%": { opacity: 0, transform: "translateY(15px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
        },
    })),

    // ========== isLoading ==========

    TasksListLoadingContainer: styled(Box)(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.25rem 0",
        gap: "1rem",
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