// assets
import { IconDashboard, IconBuilding } from '@tabler/icons-react';

// constant
const icons = { IconDashboard, IconBuilding };
const organizations = {
  name: 'organization-1'
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'overview',
      title: 'Overview',
      type: 'item',
      url: `/dashboard/${organizations.name}/overview`,
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
