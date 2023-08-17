import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {
  StyledButton,
  StyledColumn,
  StyledFooter,
  StyledIconRow,
  StyledListLinks,
} from '../../styles/footer';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Grid container spacing={3}>
          <Grid item lg={6} xs={12} xl={4} component={StyledColumn}>
            <Typography variant='subtitle1' sx={{ textTransform: 'uppercase' }}>About us</Typography>
            <Typography variant='body2' paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <StyledIconRow>
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
            </StyledIconRow>
          </Grid>
          <Grid item sm={6} xs={12} lg={3} component={StyledColumn}>
          <Typography variant='subtitle1' sx={{ textTransform: 'uppercase' }}>Information</Typography>
            <StyledListLinks>
              <StyledButton>Lorem ipsum</StyledButton>
              <StyledButton>Privacy & Policy</StyledButton>
              <StyledButton>Terms & Conditions</StyledButton>
            </StyledListLinks>
          </Grid>
          <Grid item sm={6} xs={12} lg={3} component={StyledColumn}>
            <Typography variant='subtitle1' sx={{ textTransform: 'uppercase' }}>My account</Typography>
            <StyledListLinks>
              <StyledButton>Initiatives and projects</StyledButton>
              <StyledButton>Favorite animals</StyledButton>
              <StyledButton>My Account</StyledButton>
            </StyledListLinks>
          </Grid>
        </Grid>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
