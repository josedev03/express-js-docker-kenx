const { CHARSET, USER_TABLE } = require('../configs/DBConfig');


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = knex => (
    knex.schema.createTable(USER_TABLE, table => {
    table.specificType('id', 'serial');
    table.primary('id');
    table.string('user_name', 50).notNullable();
    table.string('name', 256).notNullable();
    table.string('mail', 256).notNullable();
    table.string('password', 256).notNullable();
    table.charset(CHARSET);
  })
);

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex => knex.schema.dropTable(USER_TABLE);