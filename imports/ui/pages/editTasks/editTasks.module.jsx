import React from "react";
import { Box, Button, styled } from "@mui/material";
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';

const EditTasksStyle = {

    EditTasksBackground: styled(Box)(({ theme }) => ({
        background: "var(--body-color)",
    })),

    EditTasksContainer: styled(Box)(({ theme }) => ({
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "3rem 2rem",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
    })),

    EditTasksTitleContainer: styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "1rem",
    })),

    EditTasksTitle: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--body-font)",
        fontWeight: "var(--font-medium)",
        color: "var(--title-color)",
        marginBottom: "var(--mb-0-25)",
    })),

    EditTasksText: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--body-font)",
        color: "var(--text-color)",
        fontWeight: "var(--font-regular)",
    })),

    EditTasksFormContainer: styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        backgroundColor: "var(--container-color)",
        borderRadius: "1rem",
        width: "100%",
        margin: "0 auto",
    })),

    EditTasksLeft: styled(Box)(({ theme }) => ({
        width: "40%",
        backgroundColor: "var(--color-accent)",
        backgroundImage: "url(/assets/wallpaperSynergiaAddTask.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "1rem 0rem 0rem 1rem",
    })),

    EditTasksRight: styled(Box)(({ theme }) => ({
        width: "60%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "4.5rem",
        borderRadius: "0 1rem 1rem 0",
    })),

    EditTasksForm: styled(Box)(({ theme }) => ({
        marginTop: "3rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    })),

    EditTasksFormLayout: styled(Box)(({ theme }) => ({
        width: "100%",
        display: "flex",
        flexDirection: "row",
        gap: "0.5rem",
    })),


    EditTasksCardTextField: styled(TextField)(({ theme }) => ({
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

    EditTasksButtonOutlined: styled(Button)(({ theme }) => ({
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

    EditTasksButtonText: styled(Button)(({ theme }) => ({
        marginTop: "var(--mb-1)",
        fontFamily: "var(--font-family)",
        // backgroundColor: "var(--color-accent)",
        padding: "0.75rem 0.75rem",
        fontWeight: "var(--font-normal)",
        color: "var(--text-color)",
        "&:hover": {
        },
        "&:active": {
            boxShadow: "none",
        },
    })),

};

export default EditTasksStyle;