import { styled } from '@mui/material';
import * as mui from '@mui/material';
import { Colors } from '../../styles';

export const Paper = styled(mui.Paper)({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
});

export const BottomNavigation = styled(mui.BottomNavigation)(() => ({
  backgroundColor: Colors.shaft,
}));

export const BottomNavigationAction = styled(mui.BottomNavigationAction)(
  () => ({
    color: Colors.secondary,
  })
);
