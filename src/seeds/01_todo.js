const { TODO_TABLE } = require('../configs/DBConfig');
const dataTodo = require('./data/todo.json');
const TodoSeed = module.exports;

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

 TodoSeed.down = async knex => {
  await SeedUtils.clean(knex, TODO_TABLE);
}

TodoSeed.seed = async function(knex) {
  await SeedUtils.populate(knex, TODO_TABLE, dataTodo);
};