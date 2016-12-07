export default [
  // COMMON
  {
    name: 'Button',
    path: '/',
    component: require('./pages/Button'),
    meta: {
      section: 'Common'
    }
  },
  {
    name: 'ButtonCheckbox',
    path: '/button-checkbox',
    component: require('./pages/ButtonCheckbox'),
    meta: {
      section: 'Common'
    }
  },
  {
    name: 'ButtonRadio',
    path: '/button-radio',
    component: require('./pages/ButtonRadio'),
    meta: {
      section: 'Common'
    }
  },
  // NAVIGATION
  {
    name: 'Tabs',
    path: '/tabs',
    component: require('./pages/Tabs'),
    meta: {
      section: 'Navigation'
    }
  },
  {
    name: 'TabsVertical',
    path: '/tabs-vertical',
    component: require('./pages/TabsVertical'),
    meta: {
      section: 'Navigation'
    }
  },
  {
    name: 'Subnav',
    path: '/subnav',
    component: require('./pages/Subnav'),
    meta: {
      section: 'Navigation'
    }
  },
  {
    name: 'Pagination',
    path: '/pagination',
    component: require('./pages/Pagination'),
    meta: {
      section: 'Navigation'
    }
  },
  {
    name: 'Breadcrumb',
    path: '/breadcrumb',
    component: require('./pages/Breadcrumb'),
    meta: {
      section: 'Navigation'
    }
  },
  // DATA
  {
    name: 'Table',
    path: '/table',
    component: require('./pages/Table'),
    meta: {
      section: 'Data'
    }
  },
  {
    name: 'Picker',
    path: '/picker',
    component: require('./pages/Picker'),
    meta: {
      section: 'Data'
    }
  },
  {
    name: 'Calendar',
    path: '/calendar',
    component: require('./pages/Calendar'),
    meta: {
      section: 'Data'
    }
  },
  {
    name: 'Datepicker',
    path: '/datepicker',
    component: require('./pages/Datepicker'),
    meta: {
      section: 'Data'
    }
  },
  // DISPLAY
  {
    name: 'Modal',
    path: '/modal',
    component: require('./pages/Modal'),
    meta: {
      section: 'Display'
    }
  },
  {
    name: 'Offcanvas',
    path: '/offcanvas',
    component: require('./pages/Offcanvas'),
    meta: {
      section: 'Display'
    }
  },
  {
    name: 'Dropdown',
    path: '/dropdown',
    component: require('./pages/Dropdown'),
    meta: {
      section: 'Display'
    }
  },
  {
    name: 'Tooltip',
    path: '/tooltip',
    component: require('./pages/Tooltip'),
    meta: {
      section: 'Display'
    }
  },
  {
    name: 'Notify',
    path: '/notify',
    component: require('./pages/Notify'),
    meta: {
      section: 'Display'
    }
  },
  // OTHERS
  {
    name: 'Switcher',
    path: '/switcher',
    component: require('./pages/Switcher'),
    meta: {
      section: 'Others'
    }
  },
  {
    name: 'Upload',
    path: '/upload',
    component: require('./pages/Upload'),
    meta: {
      section: 'Others'
    }
  },
  // EXAMPLES
  {
    name: 'Picker in Dropdown',
    path: '/examples/picker-dropdown',
    component: require('./pages/examples/PickerDropdown'),
    meta: {
      section: 'Examples'
    }
  },
  {
    name: 'Datepicker in Dropdown',
    path: '/examples/datepicker-dropdown',
    component: require('./pages/examples/DatepickerDropdown'),
    meta: {
      section: 'Examples'
    }
  },
  {
    name: 'Modal as Confirm',
    path: '/examples/modal-confirm',
    component: require('./pages/examples/ModalConfirm'),
    meta: {
      section: 'Examples'
    }
  },
  // default
  {
    path: '*',
    name: 'Not Found',
    component: require('./pages/404')
  }
]
