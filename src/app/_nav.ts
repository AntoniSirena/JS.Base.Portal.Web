import { INavData } from '@coreui/angular';

var roleParent = localStorage.getItem('roleParent');
var currentMenuTemplate = localStorage.getItem('currentMenuTemplate');

let navaData: INavData[];

navaData = JSON.parse(currentMenuTemplate);

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    name: 'Portada',
    url: '/portada',
    icon: 'icon-home'
  },
  {
    name: 'Conf. del sistema',
    url: '/conf-sistema',
    icon: 'icon-settings',
    children: [
      {
        name: 'Roles',
        url: '/role',
        icon: 'fa fa-group'
      },
      {
        name: 'Parámetros de configuraciones del sistema',
        url: '/configuration-parameter',
        icon: 'icon-settings'
      }
    ]
  },
  {
    name: 'Conf. de usuarios',
    url: '/users',
    icon: 'icon-settings',
    children: [
      {
        name: 'Usuarios',
        url: '/user',
        icon: 'icon-user'
      },
      {
        name: 'Asignar rol',
        url: '/userRole',
        icon: 'fa fa-group'
      }
    ]
  }
];
