export default {
  jwt: {
    secret:
      process.env.APP_SECRET || '0c0b56384f8e5dfd466f4a61f1486b44b65dd574',
    expiresIn: '1d',
  },
};
