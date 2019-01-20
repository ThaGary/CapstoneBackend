module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/homeapp'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
