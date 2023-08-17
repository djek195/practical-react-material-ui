import React from "react";
import {
  ContentContainer,
  ContentHeader,
  ContentImageList,
  ContentImageListItemBar,
  FavIconButton
} from "../../styles/content";
import {
  ImageListItem,
  useMediaQuery,
} from "@mui/material";
import { itemData } from "../data";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Content = () => {

  const bigScreen = useMediaQuery("(min-width:900px)");
  const mediumScreen = useMediaQuery("(min-width:600px)");

  return (
    <ContentContainer>
      <ContentHeader variant="h5">Waiting for their owners</ContentHeader>
      <ContentImageList
        variant="masonry"
        cols={bigScreen ? 3 : mediumScreen ? 2 : 1}
        gap={15}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`images/${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`images/${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ContentImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <FavIconButton
                  sx={{ color: "rgb(255, 255, 255)" }}
                  aria-label={`info about ${item.title}`}
                >
                  <FavoriteIcon />
                </FavIconButton>
              }
            />
          </ImageListItem>
        ))}
      </ContentImageList>
    </ContentContainer>
  );
};

export default Content;
