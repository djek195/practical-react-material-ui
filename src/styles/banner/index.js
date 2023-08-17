import { styled } from "@mui/material";
import { Box, Button, Typography } from '@mui/material';
import { Colors } from "..";

export const BannerContainer = styled(Box)(({theme}) => ({
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    padding: "0px 0px",
    marginTop: "1rem",
    background: Colors.body_bg,
    [theme.breakpoints.down("md")]: {
        alignItems: "center"
    },
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center"
    }
}));

export const BannerImage = styled('img')(({ src, theme }) => ({
    src: `url(${src})`,
    padding: "1em",
    width: "50%",
    height: "auto",
    margin: "0",
    [theme.breakpoints.down("md")]: {
        height: "100%",
        width: "auto",
        maxWidth: "40%",
        justifyContent: "center"
    },
    [theme.breakpoints.down("sm")]: {
        maxWidth: "50%"
    }
}));

export const BannerContent = styled(Box)(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: "1em 5em",
    [theme.breakpoints.down('md')]: {
        padding: '1em',
        gap: "15px"
    }
}));

export const BannerButton = styled(Button)(() => ({
    padding: "1em 0",
    fontWeight: "bold",
    "&:hover": {
        color: Colors.white
    }
}));

export const BannerHeader = styled(Typography)(({theme}) => ({
    [theme.breakpoints.down("sm")]: {
        fontSize: "3em"
    }
}));


