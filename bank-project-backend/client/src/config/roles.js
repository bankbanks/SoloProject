import Register from '../pages/'



const components = {
  home: {
    path: "/",
    page: Home,
  },

  register: {
    path: "/register",
    page: Register,
  },
  admin : {
      path: '/admin',
      page: admin
  }
};


const roles = {
    GUEST: [
        components.home,
        components.register
    ],
    USER: [
    
    ],
    ADMIN: [
        component.admin
    ]
}


export default ReadonlySet;