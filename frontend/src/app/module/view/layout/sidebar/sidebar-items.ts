import { RouteInfo } from './sidebar.metadata';


export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'MENUITEMS.MAIN.TEXT',
    moduleName: '',
    iconType: '',
    icon: '',
    class: '',
    groupTitle: true,
    badge: '',
    badgeClass: '',
    role: ['All'],
    submenu: [],
  },
 {
    path: '',
    title: 'MENUITEMS.DASHBOARD.TEXT',
    moduleName: 'dashboard',
    iconType: 'material-icons-two-tone',
    // icon: 'dashboard',
    icon: 'home',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      {
        path: 'admin/dashboard/main',
        title: 'MENUITEMS.DASHBOARD.LIST.DASHBOARD1',
        moduleName: 'dashboard',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [],
      },
      {
        path: 'admin/dashboard/dashboard2',
        title: 'MENUITEMS.DASHBOARD.LIST.DASHBOARD2',
        moduleName: 'dashboard',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [],
      },
    ],
  },
 
  {
    path: 'admin/reservation/list',
    title: 'Reservation',
    moduleName: 'Reservation',
    iconType: 'material-icons-two-tone',
    icon: 'add_to_photos',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [],
  },


  {
    path: 'admin/chambre/list',
    title: 'Chambre',
    moduleName: 'Chambre',
    iconType: 'material-icons-two-tone',
    icon: 'add_to_photos',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [],
  },


  {
    path: 'admin/categorie/list',
    title: 'Categorie',
    moduleName: 'Categorie',
    iconType: 'material-icons-two-tone',
    icon: 'add_to_photos',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [],
  },


  {
    path: 'admin/client/list',
    title: 'Client',
    moduleName: 'Client',
    iconType: 'material-icons-two-tone',
    icon: 'add_to_photos',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [],
  },

{
    path: 'admin/settings',
    title: 'Settings',
    moduleName: 'Settings',
    iconType: 'material-icons-two-tone',
    icon: 'settings',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [],
  }
  // SideBar for SuperAdmin  [Begin]

,{
    path: '',
    title: 'MENUITEMS.DASHBOARD.TEXT',
    moduleName: 'dashboard',
    iconType: 'material-icons-two-tone',
    // icon: 'dashboard',
    icon: 'home',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['SuperAdmin'],
    submenu: [
      {
        path: 'superadmin/dashboard/main',
        title: 'MENUITEMS.DASHBOARD.LIST.DASHBOARD1',
        moduleName: 'dashboard',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['SuperAdmin'],
        submenu: [],
      },
      {
        path: 'superadmin/dashboard/dashboard2',
        title: 'MENUITEMS.DASHBOARD.LIST.DASHBOARD2',
        moduleName: 'dashboard',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['SuperAdmin'],
        submenu: [],
      },
    ],
  },
 
  {
    path: 'superadmin/reservation/list',
    title: 'Reservation',
    moduleName: 'Reservation',
    iconType: 'material-icons-two-tone',
    icon: 'add_to_photos',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['SuperAdmin'],
    submenu: [],
  },


  {
    path: 'superadmin/chambre/list',
    title: 'Chambre',
    moduleName: 'Chambre',
    iconType: 'material-icons-two-tone',
    icon: 'add_to_photos',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['SuperAdmin'],
    submenu: [],
  },


  {
    path: 'superadmin/categorie/list',
    title: 'Categorie',
    moduleName: 'Categorie',
    iconType: 'material-icons-two-tone',
    icon: 'add_to_photos',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['SuperAdmin'],
    submenu: [],
  },


  {
    path: 'superadmin/client/list',
    title: 'Client',
    moduleName: 'Client',
    iconType: 'material-icons-two-tone',
    icon: 'add_to_photos',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['SuperAdmin'],
    submenu: [],
  },


  // SideBar for SuperAdmin  [End]


  // SideBar for SousAdmin  [Begin]

,{
    path: '',
    title: 'MENUITEMS.DASHBOARD.TEXT',
    moduleName: 'dashboard',
    iconType: 'material-icons-two-tone',
    // icon: 'dashboard',
    icon: 'home',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['SousAdmin'],
    submenu: [
      {
        path: 'sousadmin/dashboard/main',
        title: 'MENUITEMS.DASHBOARD.LIST.DASHBOARD1',
        moduleName: 'dashboard',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['SousAdmin'],
        submenu: [],
      },
      {
        path: 'sousadmin/dashboard/dashboard2',
        title: 'MENUITEMS.DASHBOARD.LIST.DASHBOARD2',
        moduleName: 'dashboard',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['SousAdmin'],
        submenu: [],
      },
    ],
  },
 
  {
    path: 'sousadmin/reservation/list',
    title: 'Reservation',
    moduleName: 'Reservation',
    iconType: 'material-icons-two-tone',
    icon: 'add_to_photos',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['SousAdmin'],
    submenu: [],
  },


  {
    path: 'sousadmin/chambre/list',
    title: 'Chambre',
    moduleName: 'Chambre',
    iconType: 'material-icons-two-tone',
    icon: 'add_to_photos',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['SousAdmin'],
    submenu: [],
  },


  {
    path: 'sousadmin/categorie/list',
    title: 'Categorie',
    moduleName: 'Categorie',
    iconType: 'material-icons-two-tone',
    icon: 'add_to_photos',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['SousAdmin'],
    submenu: [],
  },


  {
    path: 'sousadmin/client/list',
    title: 'Client',
    moduleName: 'Client',
    iconType: 'material-icons-two-tone',
    icon: 'add_to_photos',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['SousAdmin'],
    submenu: [],
  },


  // SideBar for SousAdmin  [End]


  // SideBar for Commercial  [Begin]

,{
    path: '',
    title: 'MENUITEMS.DASHBOARD.TEXT',
    moduleName: 'dashboard',
    iconType: 'material-icons-two-tone',
    // icon: 'dashboard',
    icon: 'home',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Commercial'],
    submenu: [
      {
        path: 'commercial/dashboard/main',
        title: 'MENUITEMS.DASHBOARD.LIST.DASHBOARD1',
        moduleName: 'dashboard',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Commercial'],
        submenu: [],
      },
      {
        path: 'commercial/dashboard/dashboard2',
        title: 'MENUITEMS.DASHBOARD.LIST.DASHBOARD2',
        moduleName: 'dashboard',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Commercial'],
        submenu: [],
      },
    ],
  },
 
  {
    path: 'commercial/reservation/list',
    title: 'Reservation',
    moduleName: 'Reservation',
    iconType: 'material-icons-two-tone',
    icon: 'add_to_photos',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Commercial'],
    submenu: [],
  },


  {
    path: 'commercial/chambre/list',
    title: 'Chambre',
    moduleName: 'Chambre',
    iconType: 'material-icons-two-tone',
    icon: 'add_to_photos',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Commercial'],
    submenu: [],
  },


  {
    path: 'commercial/categorie/list',
    title: 'Categorie',
    moduleName: 'Categorie',
    iconType: 'material-icons-two-tone',
    icon: 'add_to_photos',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Commercial'],
    submenu: [],
  },


  {
    path: 'commercial/client/list',
    title: 'Client',
    moduleName: 'Client',
    iconType: 'material-icons-two-tone',
    icon: 'add_to_photos',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Commercial'],
    submenu: [],
  },


  // SideBar for Commercial  [End]


 ]