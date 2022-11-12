/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  let addedTable = knex.schema.createTable("stock", (table) => {
    table.increments("id"), table.integer("amount");
  });
  return addedTable;
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  let deleteTable = knex.schema.dropTable("stock");
  return deleteTable;
};
