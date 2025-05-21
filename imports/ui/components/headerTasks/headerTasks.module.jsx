import React from "react";
import { Box, Button, styled, Avatar } from "@mui/material";

const HeaderTasksStyle = {
    HeaderTasksContainer: styled(Box)(({ theme }) => ({
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "3rem 2rem 1rem",
    })),

    HeaderTasksContent: styled(Box)(({ theme }) => ({
        padding: "0 2rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    })),

    HeaderTasksImage: styled("img")(({ theme }) => ({
        width: "180px",
        height: "auto",
    })),

    HeaderTasksAvatarContainer: styled("h1")(({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        alignItems: "center",
    })),

    HeaderTasksAvatar: styled(Avatar)(({ theme }) => ({
        width: "36px",
        height: "auto",
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
    })),
};

export default HeaderTasksStyle;