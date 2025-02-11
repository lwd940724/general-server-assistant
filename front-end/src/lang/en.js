export default {
  intro:{
    summary:"The Gsetant project aims to provide a set of general enhancements for the current popular media servers (Plex, Emby, Jellyfin), using APIs and plug-ins to inherit from the media server and provide functional extensions.\n" +
      "Gsetant has a complete set of API and architecture and supports the integration of more functions into the Gsetant platform through plug-ins. The detailed plug-in list can be found in other projects in the organization\n" +
      "No service plug-ins are installed by default in the Gsetant platform initially installed. Users need to install them on demand. Gsetant provides a one-click installation function. Please refer to the specific plug-in instructions.\n" +
      "Gsetant's Plex support plugin address is: https://github.com/gsetant/Gsetant.bundl"
  },
  route: {
    dashboard: 'Dashboard',
    plugin: 'plugin',
    pluginSetting: 'plugin setting',
    github: 'GitHub',
    log: 'log',
    adminPages: 'admin panel',
    userManagement: 'user management',
    adminLog: 'system log',
    pluginManagement: 'plugin management',
    clusterManagement: 'cluster management',
    profile: 'Profile',
    library: 'library setting',
    manualSearch: 'manual search'
  },
  button:{
    save: 'save',
    cancel: 'cancel',
    setting: 'setting',
    edit:'edit',
    del:'delete',
    update: 'update'
  },
  library:{
    libraries: 'libraries',
    plugins: 'plugins',
    enabled:'enabled',
    disabled: 'disabled',
  },
  manualSearch:{
    videoTitle: 'video title',
    fileDir: 'file direction',
    usePlugin: 'use plugin',
    search: 'search',
    title: 'title',
    original_title: 'original title',
    summary: 'summary',
    studio: 'studio',
    collections: 'collections',
    originally_available_at: 'originally available time',
    year: 'release year',
    directors: 'directors',
    category: 'category',
    poster: 'poster',
    thumbnail: 'thumbnail',
  },
  pluginAdmin:{
    pluginName: 'plugin name',
    processing: 'processing',
    version: 'version',
    content : 'content',
    install: 'install plugin',
    pluginGithubAddress: 'plugin Github address',
    finish: 'install finish',
    installing: 'plugin installing',
    pleaseSelectVersion: 'please select version',
    actor: 'actor'
  },
  clusterAdmin:{
    add: 'add node',
    nodeSetting: 'setting',
    nodeRole: 'node role',
    nodeRoleMaster: 'master',
    nodeRoleMasterAndSlave: 'master&slave',
    nodeRoleSlave: 'slave',
    slaveName: 'Name',
    slaveIP: 'IP',
    slavePort: 'Port',
    slaveStatus: 'Status',
  },
  userManagement: {
    createUser:' create user',
    updatePassword: 'update password',
    deleteUser: 'delete user',
    userName: 'user name',
    authority: 'authority',
    password: 'password',
    saveSuccess: 'User information has been updated successfully'
  },
  profile:{
    token: 'plugin token',
    generateToken: 'generate Token'
  },
  navbar: {
    dashboard: 'Dashboard',
    github: 'Github',
    logOut: 'Log Out',
    profile: 'Profile',
    theme: 'Theme',
    size: 'Global Size'
  },
  login: {
    title: 'Login Form',
    logIn: 'Login',
    username: 'Username',
    password: 'Password',
    any: 'any',
    thirdparty: 'Or connect with',
    thirdpartyTips: 'Can not be simulated on local, so please combine you own business simulation! ! !'
  },
  documentation: {
    documentation: 'Documentation',
    github: 'Github Repository'
  },
  permission: {
    addRole: 'New Role',
    editPermission: 'Edit',
    roles: 'Your roles',
    switchRoles: 'Switch roles',
    tips: 'In some cases, using v-permission will have no effect. For example: Element-UI  el-tab or el-table-column and other scenes that dynamically render dom. You can only do this with v-if.',
    delete: 'Delete',
    confirm: 'Confirm',
    cancel: 'Cancel'
  },
  guide: {
    description: 'The guide page is useful for some people who entered the project for the first time. You can briefly introduce the features of the project. Demo is based on ',
    button: 'Show Guide'
  },
  components: {
    documentation: 'Documentation',
    tinymceTips: 'Rich text is a core feature of the management backend, but at the same time it is a place with lots of pits. In the process of selecting rich texts, I also took a lot of detours. The common rich texts on the market have been basically used, and I finally chose Tinymce. See the more detailed rich text comparison and introduction.',
    dropzoneTips: 'Because my business has special needs, and has to upload images to qiniu, so instead of a third party, I chose encapsulate it by myself. It is very simple, you can see the detail code in @/components/Dropzone.',
    stickyTips: 'when the page is scrolled to the preset position will be sticky on the top.',
    backToTopTips1: 'When the page is scrolled to the specified position, the Back to Top button appears in the lower right corner',
    backToTopTips2: 'You can customize the style of the button, show / hide, height of appearance, height of the return. If you need a text prompt, you can use element-ui el-tooltip elements externally',
    imageUploadTips: 'Since I was using only the vue@1 version, and it is not compatible with mockjs at the moment, I modified it myself, and if you are going to use it, it is better to use official version.'
  },
  table: {
    dynamicTips1: 'Fixed header, sorted by header order',
    dynamicTips2: 'Not fixed header, sorted by click order',
    dragTips1: 'The default order',
    dragTips2: 'The after dragging order',
    title: 'Title',
    importance: 'Imp',
    type: 'Type',
    remark: 'Remark',
    search: 'Search',
    add: 'Add',
    export: 'Export',
    reviewer: 'reviewer',
    id: 'ID',
    date: 'Date',
    author: 'Author',
    readings: 'Readings',
    status: 'Status',
    actions: 'Actions',
    edit: 'Edit',
    publish: 'Publish',
    draft: 'Draft',
    delete: 'Delete',
    cancel: 'Cancel',
    confirm: 'Confirm'
  },
  example: {
    warning: 'Creating and editing pages cannot be cached by keep-alive because keep-alive include does not currently support caching based on routes, so it is currently cached based on component name. If you want to achieve a similar caching effect, you can use a browser caching scheme such as localStorage. Or do not use keep-alive include to cache all pages directly. See details'
  },
  errorLog: {
    tips: 'Please click the bug icon in the upper right corner',
    description: 'Now the management system are basically the form of the spa, it enhances the user experience, but it also increases the possibility of page problems, a small negligence may lead to the entire page deadlock. Fortunately Vue provides a way to catch handling exceptions, where you can handle errors or report exceptions.',
    documentation: 'Document introduction'
  },
  excel: {
    export: 'Export',
    selectedExport: 'Export Selected Items',
    placeholder: 'Please enter the file name (default excel-list)'
  },
  zip: {
    export: 'Export',
    placeholder: 'Please enter the file name (default file)'
  },
  pdf: {
    tips: 'Here we use window.print() to implement the feature of downloading PDF.'
  },
  theme: {
    change: 'Change Theme',
    documentation: 'Theme documentation',
    tips: 'Tips: It is different from the theme-pick on the navbar is two different skinning methods, each with different application scenarios. Refer to the documentation for details.'
  },
  tagsView: {
    refresh: 'Refresh',
    close: 'Close',
    closeOthers: 'Close Others',
    closeAll: 'Close All'
  },
  settings: {
    title: 'Page style setting',
    theme: 'Theme Color',
    tagsView: 'Open Tags-View',
    fixedHeader: 'Fixed Header',
    sidebarLogo: 'Sidebar Logo'
  }
}
