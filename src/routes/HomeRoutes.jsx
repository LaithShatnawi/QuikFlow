import { lazy } from 'react';

// project imports
import HomeLayout from 'layout/HomeLayout';
import Loadable from 'ui-component/Loadable';

const Home = Loadable(lazy(() => import('../views/home')));

const HomeRoutes = {
  path: '/',
  element: <HomeLayout />,
  children: [
    {
      path: '/',
      element: <Home />
    },
    {
      path: 'home',
      element: <Home />
    }
  ]
};

export default HomeRoutes;
