import { styled } from '@mui/material';
import { Typography } from '@mui/material';
import { Colors } from '../../styles';

export const StyledFooter = styled('footer')({
  backgroundColor: Colors.shaft,
  padding: '32px 0',
  color: Colors.muted,
});

export const StyledColumn = styled('div')(({ theme }) => ({
  padding: '15px',
  [theme.breakpoints.down('md')]: {
    marginBottom: '16px',
  },
}));

export const StyledButton = styled(Typography)({
  flex: 1,
  cursor: 'pointer',
});

export const StyledIconRow = styled('div')({
  display: 'flex',
  gap: '16px',
  cursor: 'pointer',
});

export const StyledListLinks = styled('div')({
  display: 'flex',
  gap: '12px',
  flexDirection: 'column',
});
