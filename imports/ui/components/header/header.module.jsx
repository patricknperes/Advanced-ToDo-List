import { Box, Button, styled } from "@mui/material";

const HeaderStyle = {
    HeaderContainer: styled(Box)(({ theme }) => ({
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "3rem 2rem 1rem",
    })),

    HeaderContent: styled(Box)(({ theme }) => ({
        padding: "0 2rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    })),

    HeaderImage: styled("img")(({ theme }) => ({
        width: "180px",
        height: "auto",
    })),

    CardButtonOutlined: styled(Button)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        padding: "0.5rem 1rem",
        fontWeight: "var(--font-normal)",
        color: "var(--title-color)",
        borderColor: "var(--title-color)",
        "&:hover": {
            backgroundColor: "var(--body-color)",
        },
    })),

    CardButtonText: styled(Button)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        padding: "0.5rem 1rem",
        fontWeight: "var(--font-normal)",
        color: "var(--title-color)",
        "&:hover": {
            backgroundColor: "var(--body-color)",
        },
    })),

}

export default HeaderStyle;