import { IconButton, ImageListItemBar, styled } from "@mui/material";
import { Box, Typography, ImageList } from '@mui/material';
import { Colors } from "..";

export const ContentContainer = styled(Box)(() => ({
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    padding: "0px 0px",
    flexDirection: "column"
}));

export const ContentHeader = styled(Typography)(() => ({
    textAlign: "center",
    paddingTop: '1em',
    color: Colors.dark
}));

export const ContentImageList = styled(ImageList)(({theme}) => ({
    maxWidth: "90%",
    alignSelf: "center",
}));

export const ContentImageListItemBar = styled(ImageListItemBar)(() => ({
    opacity: "38%",
    backgroundColor: Colors.black,
    '&:hover': {
        opacity: "75%",
     },
}));

export const FavIconButton = styled(IconButton)(() => ({
    '&:hover': {
        color: Colors.primary,
        opacity: "100%"
    }
}));