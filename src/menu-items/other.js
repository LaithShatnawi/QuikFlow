// assets
import { IconSettings } from '@tabler/icons-react';

// constant
const icons = { IconSettings };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
  id: 'settings',
  type: 'group',
  children: [
    {
      id: 'System-Settings',
      title: 'System Settings',
      type: 'item',
      url: '/system-settings',
      icon: icons.IconSettings,
      breadcrumbs: false
    }
  ]
};

export default other;
