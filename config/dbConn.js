const knex = require("knex");
const knexFile = require("./knex.config");

let _dbConnection;

const connectDatabase = () => {
  if (!_dbConnection) {
    _dbConnection = knex(knexFile);
  }
  return _dbConnection;
};

const getDbConnection = () => {
  return connectDatabase();
};

// const closeDbConnection = () => {
//   if (_dbConnection) {
//     _dbConnection.destroy();
//   }
// };

// const closeDbConnection = async () => {
//   if (_dbConnection) {
//     await _dbConnection.destroy();
//   }
// };

const closeDbConnection = (conn) => {
  if (conn) {
    conn.close();
  }
};

module.exports = {
  getDbConnection,
  closeDbConnection,
};
