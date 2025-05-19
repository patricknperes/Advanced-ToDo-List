import { Box, Button, styled } from "@mui/material";

const HeaderStyle = {
    HeaderContainer: styled(Box)(({ theme }) => ({
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "3rem 2rem 1rem",
        [theme.breakpoints.down("md")]: {
            padding: "2rem 1rem 1rem",
        },
        [theme.breakpoints.down("sm")]: {
            padding: "1.5rem 0.5rem 0.5rem",
        },
    })),

    HeaderContent: styled(Box)(({ theme }) => ({
        padding: "0 2rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
            padding: "0 1.5rem",
        },
        [theme.breakpoints.down("sm")]: {
            padding: "0 1rem",
        },
    })),

    HeaderImage: styled("img")(({ theme }) => ({
        width: "180px",
        height: "auto",
        [theme.breakpoints.down("md")]: {
            width: "150px",
        },
        [theme.breakpoints.down("sm")]: {
            width: "120px",
        },
    })),

    CardButtonOutlined: styled(Button)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        fontSize: "var(--font-size-medium-small)",
        padding: "0.5rem 1rem",
        fontWeight: "var(--font-normal)",
        color: "var(--title-color)",
        borderColor: "var(--title-color)",
        "&:hover": {
            backgroundColor: "var(--body-color)",
        },
        [theme.breakpoints.down("md")]: {
            padding: "0.5rem 0.75rem",
        },
        [theme.breakpoints.down("sm")]: {
            padding: "0.25rem 0.5rem",
        },
        '@media (max-width: 350px)': {
            display: 'none',
        },
    })),

    CardButtonText: styled(Button)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        fontSize: "var(--font-size-medium-small)",
        padding: "0.5rem 1rem",
        fontWeight: "var(--font-normal)",
        color: "var(--title-color)",
        "&:hover": {
            backgroundColor: "var(--body-color)",
        },
        [theme.breakpoints.down("md")]: {
            padding: "0.5rem 0.75rem",
        },
        [theme.breakpoints.down("sm")]: {
            padding: "0.25rem 0.75rem",
        },
    })),
}

export default HeaderStyle;