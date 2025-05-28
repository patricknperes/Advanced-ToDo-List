import React from "react";
import { Box, Button, styled } from "@mui/material";
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';

const UserProfileStyle = {
    UserProfileBackground: styled(Box)(({ theme }) => ({
        backgroundColor: "var(--body-color)",
        animation: "fadeInPage 1.2s ease-out forwards",
        "@keyframes fadeInPage": {
            "0%": { opacity: 0 },
            "100%": { opacity: 1 },
        },
    })),

    UserProfileContainer: styled(Box)(({ theme }) => ({
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "3rem 2rem",
        display: "flex",
        flexDirection: "column",
        minHeight: "90vh",
        justifyContent: "center",
        alignItems: "center",
        animation: "slideInContent 1s ease-out forwards",
        opacity: 0,
        willChange: "transform, opacity",
        "@keyframes slideInContent": {
            "0%": { opacity: 0, transform: "translateX(30px)" },
            "100%": { opacity: 1, transform: "translateX(0)" },
        },
        [theme.breakpoints.down("md")]: {
            padding: "3rem 1.5rem",
        },
        [theme.breakpoints.down("sm")]: {
            padding: "3rem 1.5rem",
        },
    })),

    UserProfileTitle: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--body-font)",
        fontWeight: "var(--font-medium)",
        fontSize: "var(--font-size-big)",
        color: "var(--title-color)",
        marginBottom: "var(--mb-0-25)",
        animation: "fadeInTitle 1s ease-out 0.2s forwards",
        opacity: 0,
        "@keyframes fadeInTitle": {
            "0%": { opacity: 0, transform: "translateY(15px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
        },
    })),

    UserProfileText: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--body-font)",
        color: "var(--text-color)",
        fontSize: "var(--font-size-normal)",
        fontWeight: "var(--font-regular)",
        animation: "fadeInText 1s ease-out 0.4s forwards",
        opacity: 0,
        "@keyframes fadeInText": {
            "0%": { opacity: 0, transform: "translateY(15px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
        },
    })),

    // ========== Card Profile Style ========== 

    UserProfileCard: styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        backgroundColor: "var(--container-color)",
        borderRadius: "1rem",
        width: "100%",
        maxWidth: "1000px",
        margin: "0 auto",
        // animation: "slideInUnified 1s ease-out 0.6s forwards",
        animation: "slideInContent 1s ease-out forwards",
        opacity: 0,
        willChange: "transform, opacity",
        "@keyframes slideInContent": {
            "0%": { opacity: 0, transform: "translateY(30px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
        },
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            maxWidth: "100%",
        },
    })),

    // ========== Card Left ========== 

    UserProfileCardLeft: styled(Box)(({ theme }) => ({
        maxWidth: "40%",
        backgroundColor: "var(--color-accent)",
        backgroundImage: "url(/assets/synergiaIconeProfile.png)",
        backgroundSize: "700px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "4.5rem 3rem",
        borderRadius: "1rem 0rem 0rem 1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        // animation: "slideInLeft 1s ease-out 0.8s forwards",
        animation: "slideInContent 1s ease-out forwards",
        opacity: 0,
        willChange: "transform, opacity",
        "@keyframes slideInContent": {
            "0%": { opacity: 0, transform: "translateY(30px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
        },
        [theme.breakpoints.down("md")]: {
            maxWidth: "100%",
            borderRadius: "1rem 1rem 2rem 2rem",
            padding: "3.5rem 2rem",
        },
        [theme.breakpoints.down("sm")]: {
            padding: "2.5rem 2rem",
            backgroundSize: "550px",
        },
    })),

    UserProfileCardAvatar: styled(Avatar)(({ theme }) => ({
        width: "225px",
        height: "225px",
        border: "5px solid var(--color-accent)",
        marginBottom: "var(--mb-1)",
        boxShadow: "0 0 24px 5px rgba(0,0,0,0.08)",
        animation: "fadeInTitle 1s ease-out 0.2s forwards",
        opacity: 0,
        "@keyframes fadeInTitle": {
            "0%": { opacity: 0, transform: "translateY(15px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
        },
        [theme.breakpoints.down("md")]: {
            width: "200px",
            height: "200px",
        },
        [theme.breakpoints.down("sm")]: {
            width: "160px",
            height: "160px",
        },
    })),

    UserProfileTitleLeft: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--body-font)",
        fontWeight: "var(--font-medium)",
        color: "var(--title-color)",
        fontSize: "var(--font-size-extra-large)",
        marginBottom: "var(--mb-0-5)",
        textAlign: "center",
        animation: "fadeInTitle 1s ease-out 0.4s forwards",
        opacity: 0,
        "@keyframes fadeInTitle": {
            "0%": { opacity: 0, transform: "translateY(15px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
        },
    })),

    UserProfileTextLeft: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--body-font)",
        color: "var(--text-color)",
        fontWeight: "var(--font-regular)",
        marginBottom: "var(--mb-1)",
        fontSize: "var(--font-size-base)",
        textAlign: "center",
        animation: "fadeInTitle 1s ease-out 0.6s forwards",
        opacity: 0,
        "@keyframes fadeInTitle": {
            "0%": { opacity: 0, transform: "translateY(15px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
        },
        [theme.breakpoints.down("md")]: {
            width: "100%",
            maxWidth: "450px",
        },
    })),

    // ========== Card Right ========== 

    UserProfileCardRight: styled(Box)(({ theme }) => ({
        width: "60%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "4.5rem",
        borderRadius: "0 1rem 1rem 0",
        // animation: "slideInRight 1s ease-out 0.8s forwards",
        animation: "slideInContent 1s ease-out forwards",
        opacity: 0,
        willChange: "transform, opacity",
        "@keyframes slideInContent": {
            "0%": { opacity: 0, transform: "translateY(30px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
        },
        [theme.breakpoints.down("md")]: {
            width: "100%",
            borderRadius: "0rem 0rem 1rem 1rem",
            padding: "2.5rem",
        },
        [theme.breakpoints.down("sm")]: {
            padding: "2.5rem 2rem",
        },
    })),

    UserProfileFormContainer: styled(Box)(({ theme }) => ({
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

    UserProfileFormLayout: styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        gap: "0.5rem",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            gap: "1rem",
        },
    })),

    UserProfileCardTextField: styled(TextField)(({ theme }) => ({
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

    UserProfileCardButtonOutlined: styled(Button)(({ theme }) => ({
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
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        },
        "&:active": {
            backgroundColor: "var(--color-accent-dark)",
            boxShadow: "none",
        },
        [theme.breakpoints.down("sm")]: {
            minWidth: '0px',
            padding: "0.5rem 0.75rem",
            marginTop: "0rem",
            fontSize: "12px",
        },
    })),

    UserProfileCardButtonContainer: styled(Box)(({ theme }) => ({
        display: "flex",
        gap: "0.5rem",
        [theme.breakpoints.down("sm")]: {
            gap: "0.5rem",
        },
    })),
};

export default UserProfileStyle;