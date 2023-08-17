import React from "react";
import {
  BannerButton,
  BannerContainer,
  BannerContent,
  BannerImage,
  BannerHeader
} from "../../styles/banner";
import { Typography } from "@mui/material";

const Banner = () => {
  return (
    <BannerContainer>
      <BannerImage src="images/banner-cat1.png" />
      <BannerContent>
        <Typography variant="h5">Our motto</Typography>
        <BannerHeader variant="h2">Help Animals</BannerHeader>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        <BannerButton variant="contained">Donate</BannerButton>
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
