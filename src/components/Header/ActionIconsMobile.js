import {
  Paper,
  BottomNavigation,
  BottomNavigationAction,
} from '../../styles/actionIcon';
import HeartIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';

export function ActionIconsMobile() {
  return (
    <Paper elevation={3}>
      <BottomNavigation>
        <BottomNavigationAction icon={<HeartIcon />} />
        <BottomNavigationAction icon={<PersonIcon />} />
        <BottomNavigationAction icon={<NotificationsIcon />} />
      </BottomNavigation>
    </Paper>
  );
}

export default ActionIconsMobile;
