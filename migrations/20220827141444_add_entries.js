/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  let addedTable= knex.schema.createTable("entries",(table)=>{
    table.increments("id"),
    table.integer('price'),
    table.integer('people'),
    table.integer('discount')
  })
  return addedTable;
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  let deleteTable=knex.schema.dropTable('entries')
  return deleteTable;
};
