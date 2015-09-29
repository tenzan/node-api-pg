module.exports = {
  client: 'pg',
  debug: true,
  connection:  {
      host      : process.env.PG_HOSTNAME_POSTAG,
      user      : process.env.PG_USER_POSTAG,
      password  : process.env.PG_PASSWORD_POSTAG,
      database  : process.env.PG_DATABASE_POSTAG,
      port: '5432',
      ssl: true,
      char_set  : 'utf8'
  }
};
