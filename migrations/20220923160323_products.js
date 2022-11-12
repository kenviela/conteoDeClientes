/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  let addedTable = knex.schema.createTable("products", (table) => {
    table.increments("id"), table.string("name"), table.integer("price");
  });
  return addedTable;
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  let deleteTable = knex.schema.dropTable("products");
  return deleteTable;
};
