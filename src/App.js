import { ThemeProvider } from '@mui/system';
import theme from './styles/index';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import Header from './components/Header';
import HeaderDrawer from './components/HeaderDrawer';
import Banner from './components/Banner';
import Content from './components/Content';
import { UIProvider } from './context/ui';
import Footer from './components/Footer';
import ActionIcons from './components/Header/ActionIconsMobile';

function App() {
  const muiTheme = useTheme();
  const matchesMobile = useMediaQuery(muiTheme.breakpoints.down('md'));

  return (
    <ThemeProvider theme={theme}>
      <UIProvider>
        <Header />
        {matchesMobile && <HeaderDrawer />}
        <Banner />
        <Content />
        <Footer />
        {matchesMobile && <ActionIcons />}
      </UIProvider>
    </ThemeProvider>
  );
}

export default App;
