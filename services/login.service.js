const conn = require("../config/dbConn");

const table = "user";

const getLoginService = async (credentials) => {
  const username = credentials.username;
  const password = credentials.password;
  const db = conn.getDbConnection();
  try {
    const result = await db(table)
      .select("iduser", "is_admin")
      .where({ username: username, password: password });
    if (result.length == 0) {
      throw new Error("Invalid username or password");
    }
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  getLoginService,
};
