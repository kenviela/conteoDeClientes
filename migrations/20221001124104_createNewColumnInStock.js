/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  const addedColumn = knex.schema.alterTable("stock", (table) => {
    table.integer("idProduct").unsigned().notNullable();
    table.foreign("idProduct").references("products.id");
  });
  return addedColumn;
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  const deleteColumn = knex.schema.alterTable("stock", (table) => {
    table.dropForeign("idProduct");
    table.dropColumn("idProduct");
  });
  return deleteColumn;
};
