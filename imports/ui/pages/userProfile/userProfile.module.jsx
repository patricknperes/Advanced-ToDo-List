import React from "react";
import { Box, Button, styled } from "@mui/material";
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';

const UserProfileStyle = {

    UserProfileBackground: styled(Box)(({ theme }) => ({
        backgroundColor: "var(--body-color)",
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
    })),

    UserProfileTitle: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--body-font)",
        fontWeight: "var(--font-medium)",
        color: "var(--title-color)",
        marginBottom: "var(--mb-0-25)",
    })),

    UserProfileText: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--body-font)",
        color: "var(--text-color)",
        fontWeight: "var(--font-regular)",
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
        [theme.breakpoints.down("sm")]: {
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
        [theme.breakpoints.down("sm")]: {
            maxWidth: "100%",
            borderRadius: "1rem 1rem 0rem 0rem",
        },
    })),

    UserProfileCardAvatar: styled(Avatar)(({ theme }) => ({
        width: "225px",
        height: "225px",
        border: "5px solid var(--color-accent)",
        marginBottom: "var(--mb-1)",
        boxShadow: "0 0 24px 5px rgba(0,0,0,0.08)",
    })),

    UserProfileTitleLeft: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--body-font)",
        fontWeight: "var(--font-medium)",
        color: "var(--title-color)",
        marginBottom: "var(--mb-0-5)",
        textAlign: "center",
    })),

    UserProfileTextLeft: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--body-font)",
        color: "var(--text-color)",
        fontWeight: "var(--font-regular)",
        marginBottom: "var(--mb-1)",
        textAlign: "center",
    })),

    // ========== Card Right ========== 

    UserProfileCardRight: styled(Box)(({ theme }) => ({
        width: "60%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "4.5rem",
        borderRadius: "0 1rem 1rem 0",
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            borderRadius: "0rem 0rem 1rem 1rem",
            padding: "2.5rem",
        },
    })),

    UserProfileFormContainer: styled(Box)(({ theme }) => ({
        marginTop: "3rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
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

    UserProfileCardButtonOutlined: styled(Button)(({ theme }) => ({
        marginTop: "var(--mb-1)",
        fontFamily: "var(--font-family)",
        backgroundColor: "var(--color-accent)",
        minWidth: '120px',
        width: 'auto',
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

};

export default UserProfileStyle;
