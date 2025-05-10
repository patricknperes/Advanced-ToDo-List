import React from "react";
import { Box, styled } from "@mui/material";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SignIn from "./SignIn";


const SignInStyle = {

    SignInContainer: styled(Box)(({ theme }) => ({
        maxWidth: "1200px",
        height: "100vh",
        margin: "0 auto",
        padding: "0 2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    })),

    SignInContent: styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        backgroundColor: "var(--container-color)",
        borderRadius: "1rem",
    })),

    SignInLeft: styled(Box)(({ theme }) => ({
        width: "420px",
        backgroundColor: "var(--color-accent)",
        backgroundImage: "url(/assets/wallpaperSynergia.png)",
        backgroundSize: "950px",
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
        borderRadius: "1rem 3rem 3rem 1rem",
    })),

    SignInRight: styled(Box)(({ theme }) => ({
        width: "620px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",

        padding: "6rem 4.5rem",
        borderRadius: "0 1rem 1rem 0",
    })),

    SignInTitle: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        fontWeight: "var(--font-medium)",
        color: "var(--title-color)",
        marginBottom: "var(--mb-0-25)",
    })),

    SignInText: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        color: "var(--text-color)",
        fontWeight: "var(--font-regular)",
    })),

    SignInTextLink: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        color: "var(--color-accent)",
        fontWeight: "var(--font-regular)",
        textDecoration: "underline",
        "&:hover": {
            textDecoration: "underline",
            cursor: "pointer",
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
    })),

    SignInButtonOutlined: styled(Button)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        backgroundColor: "var(--color-accent)",
        padding: "0.75rem 1.5rem",
        fontWeight: "var(--font-normal)",
        justifyContent: "space-between",
        "&:hover": {
            backgroundColor: "var(--color-accent-dark)",
        },
        "&:active": {
            backgroundColor: "var(--color-accent-dark)",
            boxShadow: "none",
        },
    })),

}

export default SignInStyle;