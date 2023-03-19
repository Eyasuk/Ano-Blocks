//this routes can be accessed with out authentication used for authorization
const authenticationRoutes = {
  into: '/intro',
  new: '/new',
  import: 'import',
};

//this routes needed for authentication purposes
const authorizationRoutes = {
  auth: '/auth',
};

// this routes need authentication for accessing
const authorizedRoutes = {
  home: '/',
  send: '/send',
};

export const Routes = {
  authorizedRoutes,
  authorizationRoutes,
  authenticationRoutes,
};
