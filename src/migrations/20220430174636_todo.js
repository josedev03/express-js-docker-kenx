const { CHARSET, TODO_TABLE, USER_TABLE } = require('../configs/DBConfig')

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = knex => (
    knex.schema.createTable(TODO_TABLE, table => {
    table.specificType('id', 'serial');
    table.primary('id');
    table.string('description', 256);
    table.boolean('finish');
    table.bigInteger('user_id').unsigned().notNullable().index();
    table.foreign('user_id').references('id').inTable(USER_TABLE);
    table.charset(CHARSET);
  })
);

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex => knex.schema.dropTable(TODO_TABLE);
