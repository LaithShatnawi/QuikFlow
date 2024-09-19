// assets
import { IconKey, IconServer2, IconChecklist, IconHeartHandshake, IconUsersGroup, IconUser, IconCreditCard } from '@tabler/icons-react';

// constant
const icons = {
  IconKey,
  IconServer2,
  IconChecklist,
  IconHeartHandshake,
  IconUsersGroup,
  IconUser,
  IconCreditCard
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const workspace = {
  id: 'workspace',
  title: 'Workspace',
  caption: 'manage workflow',
  type: 'group',
  children: [
    {
      id: 'projects',
      title: 'Projects',
      type: 'collapse',
      icon: icons.IconServer2,
      breadcrumbs: false,
      children: [
        {
          id: 'All-Projects', //archived
          title: 'All Projects',
          type: 'item',
          url: `/dashboard/organization-1/projects`,
          breadcrumbs: false
        },
        {
          id: 'Create-Project',
          title: 'Create Project',
          type: 'item',
          url: `/dashboard/organization-1/create-project`,
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'tasks',
      title: 'Tasks',
      type: 'collapse',
      icon: icons.IconChecklist,
      breadcrumbs: false,
      children: [
        {
          id: 'All-Tasks', //Completed //Overdue
          title: 'All Tasks',
          type: 'item',
          url: `/dashboard/organization-1/tasks`,
          breadcrumbs: false
        },
        {
          id: 'Assign-Task',
          title: 'Assign Task',
          type: 'item',
          url: `/dashboard/organization-1/assign-task`,
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'clients',
      title: 'Clients',
      type: 'collapse',
      icon: icons.IconHeartHandshake,
      breadcrumbs: false,
      children: [
        {
          id: 'All-Clients',
          title: 'All Clients',
          type: 'item',
          url: `/dashboard/organization-1/clients`,
          breadcrumbs: false
        },
        {
          id: 'Add-Client',
          title: 'Add Client',
          type: 'item',
          url: `/dashboard/organization-1/add-client`,
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'teams',
      title: 'Teams',
      type: 'collapse',
      icon: icons.IconUsersGroup,
      breadcrumbs: false,
      children: [
        {
          id: 'All-Teams',
          title: 'All Teams',
          type: 'item',
          url: `/dashboard/organization-1/teams`,
          breadcrumbs: false
        },
        {
          id: 'Add-Team',
          title: 'Add Team',
          type: 'item',
          url: `/dashboard/organization-1/add-team`,
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'users',
      title: 'Users',
      type: 'collapse',
      icon: icons.IconUser,
      breadcrumbs: false,
      children: [
        {
          id: 'Manage-Users',
          title: 'Manage Users',
          type: 'item',
          url: `/dashboard/organization-1/manage-users`,
          breadcrumbs: false
        },
        {
          id: 'Manage-Roles',
          title: 'Manage Roles',
          type: 'item',
          url: `/dashboard/organization-1/manage-roles`,
          breadcrumbs: false
        },
        {
          id: 'Permissions-Control',
          title: 'Permissions Control',
          type: 'item',
          url: `/dashboard/organization-1/permissions-control`,
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'Billing-Invoices',
      title: 'Billing & Invoices',
      type: 'item',
      url: '/dashboard/organization-1/billing-invoices',
      icon: icons.IconCreditCard,
      breadcrumbs: false
    }
  ]
};

export default workspace;
