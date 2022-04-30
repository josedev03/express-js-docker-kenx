const SeedUtils = require('../utils/SeedUtils');
const {USER_TABLE} = require('../configs/DBConfig');
const dataUsers = require('./data/users.json');

const UserSeed = module.exports;
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

UserSeed.down = async knex => {
  await SeedUtils.clean(knex, USER_TABLE);
}

UserSeed.seed = async function(knex) {
  await SeedUtils.populate(knex, USER_TABLE, dataUsers);
};