import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Box,
  Divider,
  Drawer,
  Hidden,
  Typography
} from '@material-ui/core';
import ReceiptIcon from '@material-ui/icons/Receipt';
import ChartSquareBarIcon from '../../icons/ChartSquareBar';
import FolderOpenIcon from '../../icons/FolderOpen';
import ShoppingCartIcon from '../../icons/ShoppingCart';
import UserIcon from '../../icons/User';
import UsersIcon from '../../icons/Users';
import Logo from '../Logo';
import NavSection from '../NavSection';
import Scrollbar from '../Scrollbar';

const sections = [
  {
    title: 'General',
    items: [
      {
        title: 'Overview',
        path: '/dashboard',
        icon: <ChartSquareBarIcon fontSize='small' />
      },
      {
        title: 'Account',
        path: '/dashboard/account',
        icon: <UserIcon fontSize='small' />
      }
    ]
  },
  {
    title: 'Paramètres',
    items: [
      {
        title: 'Customers',
        path: '/dashboard/customers',
        icon: <UsersIcon fontSize='small' />,
        children: [
          {
            title: 'List',
            path: '/dashboard/customers'
          },
          {
            title: 'Details',
            path: '/dashboard/customers/1'
          },
          {
            title: 'Edit',
            path: '/dashboard/customers/1/edit'
          }
        ]
      },
      {
        title: 'Products',
        path: '/dashboard/products',
        icon: <ShoppingCartIcon fontSize='small' />,
        children: [
          {
            title: 'List',
            path: '/dashboard/products'
          },
          {
            title: 'Create',
            path: '/dashboard/products/new'
          }
        ]
      },
      {
        title: 'Orders',
        icon: <FolderOpenIcon fontSize='small' />,
        path: '/dashboard/orders',
        children: [
          {
            title: 'List',
            path: '/dashboard/orders'
          },
          {
            title: 'Details',
            path: '/dashboard/orders/1'
          }
        ]
      },
      {
        title: 'Invoices',
        path: '/dashboard/invoices',
        icon: <ReceiptIcon fontSize='small' />,
        children: [
          {
            title: 'List',
            path: '/dashboard/invoices'
          },
          {
            title: 'Details',
            path: '/dashboard/invoices/1'
          }
        ]
      }
    ]
  }
];

const DashboardSidebar = (props) => {
  const { onMobileClose, openMobile } = props;
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname ]);

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Scrollbar options={{ suppressScrollX: true }}>
        <Hidden lgUp>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              p: 2
            }}
          >
            <RouterLink to='/'>
              <Logo
                sx={{
                  height: 40,
                  width: 40
                }}
              />
            </RouterLink>
          </Box>
        </Hidden>
        <Box sx={{ p: 2 }}>
          <Box
            sx={{
              alignItems: 'center',
              backgroundColor: 'background.default',
              borderRadius: 1,
              display: 'flex',
              overflow: 'hidden',
              p: 2
            }}
          >
            <Box sx={{ ml: 2 }}>
              <Typography color='textPrimary' variant='subtitle2'>
                James
              </Typography>
            </Box>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ p: 2 }}>
          {sections.map((section) => (
            <NavSection
              key={section.title}
              pathname={location.pathname}
              sx={{
                '& + &': {
                  mt: 3
                }
              }}
              {...section}
            />
          ))}
        </Box>
      </Scrollbar>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor='left'
          onClose={onMobileClose}
          open={openMobile}
          PaperProps={{
            sx: {
              backgroundColor: 'background.paper',
              width: 280
            }
          }}
          variant='temporary'
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer
          anchor='left'
          open
          PaperProps={{
            sx: {
              backgroundColor: 'background.paper',
              height: 'calc(100% - 64px) !important',
              top: '64px !Important',
              width: 280
            }
          }}
          variant='persistent'
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

export default DashboardSidebar;
