import { Suspense, lazy } from 'react';
import DashboardLayout from './components/dashboard/DashboardLayout';
import LoadingScreen from './components/LoadingScreen';

const Loadable = (Component) => (props) => (
  <Suspense fallback={<LoadingScreen />}>
    <Component {...props} />
  </Suspense>
);

// Dashboard pages
const Overview = Loadable(lazy(() => import('./pages/dashboard/Overview')));

const routes = [
  {
    path: 'dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: '/',
        element: <Overview />
      }
    ]
  }
];

export default routes;
