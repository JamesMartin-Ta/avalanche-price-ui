import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Sun from '../../icons/Sun';
import Moon from '../../icons/Moon';
import PropTypes from 'prop-types';
import useSettings from '../../hooks/useSettings';
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  Switch
} from '@material-ui/core';
import { experimentalStyled } from '@material-ui/core/styles';
import MenuIcon from '../../icons/Menu';
import Logo from '../Logo';

const DashboardNavbarRoot = experimentalStyled(AppBar)(({ theme }) => ({
  ...(theme.palette.mode === 'light' && {
    backgroundColor: theme.palette.primary.main,
    boxShadow: 'none',
    color: theme.palette.primary.contrastText
  }),
  ...(theme.palette.mode === 'dark' && {
    backgroundColor: theme.palette.background.paper,
    borderBottom: `1px solid ${theme.palette.divider}`,
    boxShadow: 'none'
  }),
  zIndex: theme.zIndex.drawer + 100
}));

const DashboardNavbar = (props) => {
  const { onSidebarMobileOpen, ...other } = props;
  const { settings, saveSettings } = useSettings();

  const getValues = (settings) => ({
    compact: settings.compact,
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes,
    roundedCorners: settings.roundedCorners,
    theme: settings.theme
  });
  const [values, setValues] = useState(getValues(settings));
 
  const handleChangeTheme = () => {
    setValues({
      ...values,
      ['theme']: values.theme === 'LIGHT' ? 'DARK' : 'LIGHT'
    });
    saveSettings(values);
  };

  return (
    <DashboardNavbarRoot {...other}>
      <Toolbar sx={{ minHeight: 64 }}>
        <Hidden lgUp>
          <IconButton color='inherit' onClick={onSidebarMobileOpen}>
            <MenuIcon fontSize='small' />
          </IconButton>
        </Hidden>
        <Hidden lgDown>
          <RouterLink to='/'>
            <Logo
              sx={{
                height: 40,
                width: 40
              }}
            />
          </RouterLink>
        </Hidden>
        <Box
          sx={{
            flexGrow: 1,
            ml: 2
          }}
        />
        <Box display='flex' alignItems='center'>
          <Sun />
          <Switch
            color='primary'
            checked={settings.theme === 'DARK'}
            onChange={() => handleChangeTheme()}
          />
          <Moon />
        </Box>
      </Toolbar>
    </DashboardNavbarRoot>
  );
};

DashboardNavbar.propTypes = {
  onSidebarMobileOpen: PropTypes.func
};

export default DashboardNavbar;
