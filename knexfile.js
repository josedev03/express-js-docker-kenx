// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  db: {
    client: 'mysql',
    connection: {
      // filename: './dev.sqlite3'
      database: 'todo',
      user: 'admintodo',
      password: 'prueba1234'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/migrations',
    }
  }
};
