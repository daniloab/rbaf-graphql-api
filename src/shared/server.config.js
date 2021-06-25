const SERVER_ENV = {
  production: {
    SERVER_PORT: process.env.PORT || 9001,
  },
  preproduction: {
    SERVER_PORT: 9001,
  },
  development: {
    SERVER_PORT: 9001,
  },
};

export default SERVER_ENV;
