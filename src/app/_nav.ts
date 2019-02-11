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
        icon: 'icon-star'
      },
      {
        name: 'Setup-PaymentMethod',
        url: '/cashofficemaster/setuppaymentmethod',
        icon: 'icon-star'
      },
      {
        name: 'Setup-Applications',
        url: '/cashofficemaster/setupapplications',
        icon: 'icon-star'
      },
      {
        name: 'Setup-CashOffice',
        url: '/cashofficemaster/setupcashoffice',
        icon: 'icon-star'
      },
      {
        name: 'Assign-Cashier',
        url: '/cashofficemaster/assigncashier',
        icon: 'icon-star'
      }      
    ]
  },  
  {
    name: 'CashOfficeReports',
    url: '/cashofficereports',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Cashier-Assignment',
        url: '/cashofficereports/cashier-assignment',
        icon: 'icon-star'
      },
      {
        name: 'Collection-Branch',  //Name of the menu item
        url: '/cashofficereports/collection-branch', //url at url bar
        icon: 'icon-star'
      },
      {
        name: 'Collection-App-Detail',
        url: '/cashofficereports/collection-app-detail',
        icon: 'icon-star'
      },
      {
        name: 'Collection-App-Summary',
        url: '/cashofficereports/collection-app-summary',
        icon: 'icon-star'
      },
      {
        name: 'Receipt-Listing',
        url: '/cashofficereports/receipt-listing',
        icon: 'icon-star'
      },
      {
        name: 'Deposit-Slip',
        url: '/cashofficereports/deposit-slip',
        icon: 'icon-star'
      },
      {
        name: 'Reprint-Receipt',
        url: '/cashofficereports/reprint-receipt',
        icon: 'icon-star'
      }       
    ]
  },
  {
    name: 'Pay Point Master',
    url: '/paypointmaster',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Debit File Template Assignment',
        url: '/paypointmaster/debit-file-template-assignment',
        icon: 'icon-star'        
      },
      {
        name: 'File Designer',
        url: '/paypointmaster/filedesigner',
        icon: 'icon-star'
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
export const apiURL="http://192.168.1.158:9090/CashOffice-Test/api";
