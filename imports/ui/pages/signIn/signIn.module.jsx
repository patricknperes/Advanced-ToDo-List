import React from "react";
import { Box, styled } from "@mui/material";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SignInStyle = {

    BackgroundStyle: styled(Box)(({ theme }) => ({
        color: "var(--text-color)",
        backgroundImage: "url('/assets/homeBg.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
    })),

    SignInContainer: styled(Box)(({ theme }) => ({
        maxWidth: "1200px",
        minHeight: "80vh",
        margin: "0 auto",
        padding: "3rem 2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        animation: "fadeInPage 1.2s ease-out forwards",
        "@keyframes fadeInPage": {
            "0%": { opacity: 0 },
            "100%": { opacity: 1 },
        },
        [theme.breakpoints.down("md")]: {
            padding: "3rem 1.5rem",
            minHeight: "85vh",
        },
        [theme.breakpoints.down("sm")]: {
            padding: "3rem 1rem",
        },
    })),

    SignInContent: styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        backgroundColor: "var(--container-color)",
        borderRadius: "1rem",
        width: "100%",
        maxWidth: "1000px",
        animation: "slideInUnified 1s ease-out forwards",
        opacity: 0,
        willChange: "transform, opacity",
        "@keyframes slideInUnified": {
            "0%": { opacity: 0, transform: "translateY(30px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
        },
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            maxWidth: "450px",
        },
    })),

    SignInLeft: styled(Box)(({ theme }) => ({
        width: "40%",
        backgroundColor: "var(--color-accent)",
        backgroundImage: "url(/assets/wallpaperSynergia.png)",
        backgroundSize: "1000px",
        backgroundPosition: "left 20px",
        backgroundRepeat: "no-repeat",
        borderRadius: "1rem 3rem 3rem 1rem",
        animation: "slideInUnified 1s ease-out forwards",
        opacity: 0,
        willChange: "transform, opacity",
        "@keyframes slideInUnified": {
            "0%": { opacity: 0, transform: "translateY(30px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
        },
        [theme.breakpoints.down("md")]: {
            backgroundSize: "800px",
        },
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    })),

    SignInRight: styled(Box)(({ theme }) => ({
        width: "60%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "6rem 4.5rem",
        borderRadius: "0 1rem 1rem 0",
        animation: "slideInUnified 1s ease-out forwards",
        opacity: 0,
        willChange: "transform, opacity",
        "@keyframes slideInUnified": {
            "0%": { opacity: 0, transform: "translateY(30px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
        },
        [theme.breakpoints.down("md")]: {
            padding: "4rem 3rem",
        },
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            padding: "3.5rem 2rem",
        },
    })),

    SignInTitle: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        fontSize: "var(--font-size-big)",
        fontWeight: "var(--font-medium)",
        color: "var(--title-color)",
        marginBottom: "var(--mb-0-25)",
        lineHeight: "3rem",
        animation: "fadeInTitle 1s ease-out 0.4s forwards",
        opacity: 0,
        "@keyframes fadeInTitle": {
            "0%": { opacity: 0, transform: "translateY(15px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
        },
        [theme.breakpoints.down("md")]: {
            lineHeight: "2rem",
        },
    })),

    SignInText: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        color: "var(--text-color)",
        fontSize: "var(--font-size-base)",
        fontWeight: "var(--font-regular)",
        animation: "fadeInText 1s ease-out 0.6s forwards",
        opacity: 0,
        "@keyframes fadeInText": {
            "0%": { opacity: 0, transform: "translateY(15px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
        },
    })),

    SignInTextLink: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        color: "var(--color-accent)",
        fontWeight: "var(--font-regular)",
        textDecoration: "underline",
        transition: "color 0.3s ease",
        "&:hover": {
            textDecoration: "underline",
            color: "var(--color-accent-dark)",
            cursor: "pointer",
        },
    })),

    SigninFormContainer: styled(Box)(({ theme }) => ({
        marginTop: "3rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        animation: "fadeInForm 1s ease-out 0.7s forwards",
        opacity: 0,
        "@keyframes fadeInForm": {
            "0%": { opacity: 0, transform: "translateY(15px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
        },
    })),

    SignInTextField: styled(TextField)(({ theme }) => ({
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

    SignInButtonOutlined: styled(Button)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        backgroundColor: "var(--color-accent)",
        padding: "0.75rem 1.5rem",
        fontWeight: "var(--font-normal)",
        justifyContent: "space-between",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
            backgroundColor: "var(--color-accent-dark)",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        },
        "&:active": {
            backgroundColor: "var(--color-accent-dark)",
            boxShadow: "none",
        },
    })),
};

export default SignInStyle;