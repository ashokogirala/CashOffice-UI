export const navItems = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Cash Office'
  },
  {
    name: 'CashOfficeMaster',
    url: '/cashofficemaster',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Setup-Cashier',
        url: '/cashofficemaster/setupcashier',
        icon: 'icon-puzzle'
      },
      {
        name: 'Setup-PaymentMethod',
        url: '/cashofficemaster/setuppaymentmethod',
        icon: 'icon-puzzle'
      },
      {
        name: 'Setup-Applications',
        url: '/cashofficemaster/setupapplications',
        icon: 'icon-puzzle'
      },
      {
        name: 'Setup-CashOffice',
        url: '/cashofficemaster/setupcashoffice',
        icon: 'icon-puzzle'
      },
      {
        name: 'Assign-Cashier',
        url: '/cashofficemaster/assigncashier',
        icon: 'icon-puzzle'
      },
      {
        name: 'Carousels',
        url: '/cashofficemaster/carousels',
        icon: 'icon-puzzle'
      },
      {
        name: 'Collapses',
        url: '/cashofficemaster/collapses',
        icon: 'icon-puzzle'
      },
      {
        name: 'Forms',
        url: '/cashofficemaster/forms',
        icon: 'icon-puzzle'
      },
      {
        name: 'Pagination',
        url: '/cashofficemaster/paginations',
        icon: 'icon-puzzle'
      },
      {
        name: 'Popovers',
        url: '/cashofficemaster/popovers',
        icon: 'icon-puzzle'
      },
      {
        name: 'Progress',
        url: '/cashofficemaster/progress',
        icon: 'icon-puzzle'
      },
      {
        name: 'Switches',
        url: '/cashofficemaster/switches',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tables',
        url: '/cashofficemaster/tables',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tabs',
        url: '/cashofficemaster/tabs',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tooltips',
        url: '/cashofficemaster/tooltips',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Buttons',
    url: '/buttons',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Buttons',
        url: '/buttons/buttons',
        icon: 'icon-cursor'
      },
      {
        name: 'Dropdowns',
        url: '/buttons/dropdowns',
        icon: 'icon-cursor'
      },
      {
        name: 'Brand Buttons',
        url: '/buttons/brand-buttons',
        icon: 'icon-cursor'
      }
    ]
  },
  {
    name: 'Charts',
    url: '/charts',
    icon: 'icon-pie-chart'
  },
  {
    name: 'Icons',
    url: '/icons',
    icon: 'icon-star',
    children: [
      {
        name: 'CoreUI Icons',
        url: '/icons/coreui-icons',
        icon: 'icon-star',
        badge: {
          variant: 'success',
          text: 'NEW'
        }
      },
      {
        name: 'Flags',
        url: '/icons/flags',
        icon: 'icon-star'
      },
      {
        name: 'Font Awesome',
        url: '/icons/font-awesome',
        icon: 'icon-star',
        badge: {
          variant: 'secondary',
          text: '4.7'
        }
      },
      {
        name: 'Simple Line Icons',
        url: '/icons/simple-line-icons',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Notifications',
    url: '/notifications',
    icon: 'icon-bell',
    children: [
      {
        name: 'Alerts',
        url: '/notifications/alerts',
        icon: 'icon-bell'
      },
      {
        name: 'Badges',
        url: '/notifications/badges',
        icon: 'icon-bell'
      },
      {
        name: 'Modals',
        url: '/notifications/modals',
        icon: 'icon-bell'
      }
    ]
  },
  {
    name: 'Widgets',
    url: '/widgets',
    icon: 'icon-calculator',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Extras',
  },
  {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'icon-star'
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'icon-star'
      },
      {
        name: 'Error 404',
        url: '/404',
        icon: 'icon-star'
      },
      {
        name: 'Error 500',
        url: '/500',
        icon: 'icon-star'
      }
    ]
  }

];
