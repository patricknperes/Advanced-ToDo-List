import React from "react";
import { Box, styled } from "@mui/material";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const SignUpStyle = {

    SignUpContainer: styled(Box)(({ theme }) => ({
        maxWidth: "1200px",
        minHeight: "100vh",
        margin: "0 auto",
        padding: "3rem 2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    })),

    SignUpContent: styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        backgroundColor: "var(--container-color)",
        borderRadius: "1rem",
    })),

    SignUpLeft: styled(Box)(({ theme }) => ({
        width: "620px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "4.5rem",
        borderRadius: "1rem 0 0 1rem",
    })),

    SignUpRight: styled(Box)(({ theme }) => ({
        width: "540px",
        backgroundColor: "var(--color-accent)",
        backgroundImage: "url(/assets/wallpaperSynergiaText.png)",
        backgroundSize: "1100px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "3rem 1rem 1rem 3rem",
    })),

    SignUpTitle: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        fontWeight: "var(--font-medium)",
        color: "var(--title-color)",
        marginBottom: "var(--mb-0-25)",
    })),

    SignUpText: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        color: "var(--text-color)",
        fontWeight: "var(--font-regular)",
    })),

    SignUpTextLink: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        color: "var(--color-accent)",
        fontWeight: "var(--font-regular)",
        textDecoration: "underline",
        "&:hover": {
            textDecoration: "underline",
            cursor: "pointer",
        },
    })),

    SignUpFormContainer: styled(Box)(({ theme }) => ({
        marginTop: "3rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    })),

    SignUpFormLayout: styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        gap: "0.5rem",
    })),

    SignUpTextField: styled(TextField)(({ theme }) => ({
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

        // Ícones (ex: startAdornment, endAdornment)
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

    SignUpButtonOutlined: styled(Button)(({ theme }) => ({
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

export default SignUpStyle;