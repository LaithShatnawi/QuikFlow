import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard')));
const Projects = Loadable(lazy(() => import('views/pages/projects')));
const CreateProject = Loadable(lazy(() => import('views/pages/projects/create-project')));
const Tasks = Loadable(lazy(() => import('views/pages/tasks')));
const AssignTask = Loadable(lazy(() => import('views/pages/tasks/assign-task')));
const Clients = Loadable(lazy(() => import('views/pages/clients')));
const AddClient = Loadable(lazy(() => import('views/pages/clients/add-client')));
const Team = Loadable(lazy(() => import('views/pages/teams')));
const AddTeam = Loadable(lazy(() => import('views/pages/teams/add-team')));
const User = Loadable(lazy(() => import('views/pages/users')));
const ManageRoles = Loadable(lazy(() => import('views/pages/users/manage-roles')));
const PermissionsControl = Loadable(lazy(() => import('views/pages/users/permissions-control')));
const BillingAndInvoices = Loadable(lazy(() => import('views/pages/billing-invoices')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const organization = 'organization-1';

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: 'dashboard',
      children: [
        {
          path: `${organization}/overview`,
          element: <DashboardDefault />
        },
        {
          path: `${organization}/projects`,
          element: <Projects />
        },
        {
          path: `${organization}/create-project`,
          element: <CreateProject />
        },
        {
          path: `${organization}/tasks`,
          element: <Tasks />
        },
        {
          path: `${organization}/assign-task`,
          element: <AssignTask />
        },
        {
          path: `${organization}/clients`,
          element: <Clients />
        },
        {
          path: `${organization}/add-client`,
          element: <AddClient />
        },
        {
          path: `${organization}/teams`,
          element: <Team />
        },
        {
          path: `${organization}/add-team`,
          element: <AddTeam />
        },
        {
          path: `${organization}/manage-users`,
          element: <User />
        },
        {
          path: `${organization}/manage-roles`,
          element: <ManageRoles />
        },
        {
          path: `${organization}/permissions-control`,
          element: <PermissionsControl />
        },
        {
          path: `${organization}/billing-invoices`,
          element: <BillingAndInvoices />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-typography',
          element: <UtilsTypography />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-color',
          element: <UtilsColor />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-shadow',
          element: <UtilsShadow />
        }
      ]
    },
    {
      path: 'system-settings',
      element: <SamplePage />
    }
  ]
};

export default MainRoutes;
