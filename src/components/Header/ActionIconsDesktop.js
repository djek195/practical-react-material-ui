import { MyList } from '../../styles/header';
import { Colors } from '../../styles';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Divider, ListItemButton, ListItemIcon } from '@mui/material';
import HeartIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function ActionIcons() {
  const theme = useTheme();
  const matchesTablet = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <MyList type='row' sx={{ width: '100px' }}>
      <ListItemButton
        sx={{
          justifyContent: 'center',
          padding: matchesTablet ? '8px 0' : '8px 16px',
        }}
      >
        <ListItemIcon
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <HeartIcon
            sx={{
              color: Colors.muted,
            }}
          />
        </ListItemIcon>
      </ListItemButton>
      <Divider orientation='vertical' sx={{ height: '40px' }} />
      <ListItemButton
        sx={{
          justifyContent: 'center',
          padding: matchesTablet ? '8px 0' : '8px 16px',
        }}
      >
        <ListItemIcon
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <PersonIcon
            sx={{
              color: Colors.muted,
            }}
          />
        </ListItemIcon>
      </ListItemButton>
      <Divider orientation='vertical' sx={{ height: '40px' }} />
      <ListItemButton
        sx={{
          justifyContent: 'center',
          padding: matchesTablet ? '8px 0' : '8px 16px',
        }}
      >
        <ListItemIcon
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <NotificationsIcon
            sx={{
              color: Colors.muted,
            }}
          />
        </ListItemIcon>
      </ListItemButton>
    </MyList>
  );
}
