import { useRoutes } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from './components/GlobalStyles';
import routes from './routes';
import { createTheme } from './theme';
import SplashScreen from './components/SplashScreen';
import useSettings from './hooks/useSettings';

const App = () => {
  const content = useRoutes(routes);
  const { settings } = useSettings();

  const theme = createTheme({
    responsiveFontSizes: settings.responsiveFontSizes,
    roundedCorners: settings.roundedCorners,
    theme: settings.theme
  });

  // temp
  const auth = {
    isInitialized: true
  };

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        dense
        maxSnack={3}
      >
        <GlobalStyles />
        {auth.isInitialized ? content : <SplashScreen />}
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
