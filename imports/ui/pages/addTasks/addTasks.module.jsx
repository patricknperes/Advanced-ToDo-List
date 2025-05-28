import React from "react";
import { Box, Button, styled } from "@mui/material";
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';

const AddTasksStyle = {
    AddTasksBackground: styled(Box)(({ theme }) => ({
        background: "var(--body-color)",
        animation: "fadeInPage 1.2s ease-out forwards",
        "@keyframes fadeInPage": {
            "0%": { opacity: 0 },
            "100%": { opacity: 1 },
        },
    })),

    AddTasksContainer: styled(Box)(({ theme }) => ({
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "3rem 2rem",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
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
            padding: "3rem 1rem",
        },
    })),

    AddTasksTitleContainer: styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "1rem",
        animation: "fadeInTitle 1s ease-out 0.2s forwards",
        opacity: 0,
        "@keyframes fadeInTitle": {
            "0%": { opacity: 0, transform: "translateY(15px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
        },
    })),

    AddTasksTitle: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--body-font)",
        fontWeight: "var(--font-medium)",
        color: "var(--title-color)",
        marginBottom: "var(--mb-0-25)",
        fontSize: "var(--font-size-big)",
        animation: "fadeInTitle 1s ease-out 0.2s forwards",
        opacity: 0,
        "@keyframes fadeInTitle": {
            "0%": { opacity: 0, transform: "translateY(15px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
        },
    })),

    AddTasksText: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--body-font)",
        color: "var(--text-color)",
        fontWeight: "var(--font-regular)",
        fontSize: "var(--font-size-normal)",
        animation: "fadeInText 1s ease-out 0.4s forwards",
        opacity: 0,
        "@keyframes fadeInText": {
            "0%": { opacity: 0, transform: "translateY(15px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
        },
    })),

    AddTasksFormContainer: styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        backgroundColor: "var(--container-color)",
        borderRadius: "1rem",
        width: "100%",
        margin: "0 auto",
        animation: "slideInContent 1s ease-out forwards",
        opacity: 0,
        willChange: "transform, opacity",
        "@keyframes slideInContent": {
            "0%": { opacity: 0, transform: "translateY(30px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
        },
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            width: "100%",
            maxWidth: "600px",
        },
    })),

    AddTasksLeft: styled(Box)(({ theme }) => ({
        width: "40%",
        backgroundColor: "var(--color-accent)",
        backgroundImage: "url(/assets/wallpaperSynergiaAddTask.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "1rem 0rem 0rem 1rem",
        animation: "slideInContent 1s ease-out forwards",
        opacity: 0,
        willChange: "transform, opacity",
        "@keyframes slideInContent": {
            "0%": { opacity: 0, transform: "translateY(30px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
        },
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
    })),

    AddTasksRight: styled(Box)(({ theme }) => ({
        width: "60%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "4.5rem",
        borderRadius: "0 1rem 1rem 0",
        animation: "slideInContent 1s ease-out forwards",
        opacity: 0,
        willChange: "transform, opacity",
        "@keyframes slideInContent": {
            "0%": { opacity: 0, transform: "translateY(30px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
        },
        [theme.breakpoints.down("md")]: {
            width: "100%",
            padding: "3.5rem 3rem",
        },
        [theme.breakpoints.down("sm")]: {
            padding: "2.5rem 2rem",
        },
    })),

    AddTasksForm: styled(Box)(({ theme }) => ({
        marginTop: "3rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        animation: "fadeInText 1s ease-out 0.6s forwards",
        opacity: 0,
        "@keyframes fadeInText": {
            "0%": { opacity: 0, transform: "translateY(15px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
        },
    })),

    AddTasksFormLayout: styled(Box)(({ theme }) => ({
        width: "100%",
        display: "flex",
        flexDirection: "row",
        gap: "0.5rem",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            gap: "1rem",
        },
    })),

    AddTasksCardTextField: styled(TextField)(({ theme }) => ({
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "var(--text-color)",
            },
            "&:hover fieldset": {
                borderColor: "var(--color-accent)",
            },
            "&.Mui-focused fieldset": {
                borderColor: "var(--color-accent)",
            },
        },
        "& .MuiInputLabel-root": {
            color: "var(--text-color)",
            fontFamily: "var(--font-family)",
            fontWeight: "var(--font-regular)",
            "&.Mui-focused": {
                color: "var(--color-accent)",
            },
        },
        "& .MuiInputBase-input": {
            color: "var(--text-color)",
            fontFamily: "var(--font-family)",
            fontWeight: "var(--font-regular)",
            "&:-webkit-autofill": {
                WebkitBoxShadow: "0 0 0 100px var(--container-color) inset",
                WebkitTextFillColor: "var(--text-color)",
                transition: "background-color 5000s ease-in-out 0s",
            },
        },
        "& .MuiFormHelperText-root": {
            color: "var(--color-accent)",
            fontFamily: "var(--font-family)",
            fontWeight: "var(--font-regular)",
        },
        "& .MuiFormLabel-root": {
            color: "var(--text-color)",
            fontFamily: "var(--font-family)",
            fontWeight: "var(--font-regular)",
        },
        "& .MuiFormLabel-root.Mui-focused": {
            color: "var(--color-accent)",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--color-accent)",
        },
        "& .MuiInputAdornment-root .MuiSvgIcon-root": {
            color: "var(--text-color)",
            transition: "color 0.3s ease",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiInputAdornment-root .MuiSvgIcon-root": {
            color: "var(--color-accent)",
        },
        "& .MuiOutlinedInput-root:hover .MuiInputAdornment-root .MuiSvgIcon-root": {
            color: "var(--color-accent)",
        },
    })),

    AddTasksButtonOutlined: styled(Button)(({ theme }) => ({
        marginTop: "var(--mb-1)",
        fontFamily: "var(--font-family)",
        backgroundColor: "var(--color-accent)",
        minWidth: '120px',
        width: 'auto',
        padding: "0.75rem 1.5rem",
        fontWeight: "var(--font-normal)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
            backgroundColor: "var(--color-accent-dark)",
            transform: "scale(1.05)",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        },
        "&:active": {
            backgroundColor: "var(--color-accent-dark)",
            boxShadow: "none",
        },
    })),

    AddTasksButtonText: styled(Button)(({ theme }) => ({
        marginTop: "var(--mb-1)",
        fontFamily: "var(--font-family)",
        padding: "0.75rem 0.75rem",
        fontWeight: "var(--font-normal)",
        color: "var(--text-color)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        },
        "&:active": {
            boxShadow: "none",
        },
    })),

    AddTasksButtonContainer: styled(Box)(({ theme }) => ({
        display: "flex",
        gap: "0.5rem",
        animation: "fadeInButtons 1s ease-out 1.6s forwards",
        opacity: 0,
        "@keyframes fadeInButtons": {
            "0%": { opacity: 0, transform: "scale(0.9)" },
            "100%": { opacity: 1, transform: "scale(1)" },
        },
    })),
};

export default AddTasksStyle;