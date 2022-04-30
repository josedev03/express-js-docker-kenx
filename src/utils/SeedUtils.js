SeedUtils = module.exports;

SeedUtils.clean = async (knex, tableName) => {
  await knex.raw('SET FOREIGN_KEY_CHECKS=0;');
  await knex.raw(`DELETE FROM ${tableName};`);
  await knex.raw('SET FOREIGN_KEY_CHECKS=1;');
  await knex.raw(`ALTER TABLE ${tableName} AUTO_INCREMENT = 1;`);
}

SeedUtils.populate = async (knex, tableName, data) => {
  await SeedUtils.clean(knex, tableName);
  await knex(tableName).insert(data);
}