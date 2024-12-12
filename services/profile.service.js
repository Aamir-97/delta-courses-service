const conn = require("../config/dbConn");

const table = "user";

const getAllProfileService = async () => {
  const db = conn.getDbConnection();

  try {
    let all = await db(table).count("* as count");
    const profiles = await db(table).select("*");
    return { count: all[0].count, profiles };
  } catch (error) {
    throw new Error(error.message);
  }
};

const getProfileByIdService = async (id) => {
  const db = conn.getDbConnection();

  try {
    const profile = await db(table).select("*").where({ iduser: id });
    return profile;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateProfileService = async (id, data) => {
  const db = conn.getDbConnection();

  try {
    const profile = await db(table).where({ iduser: id }).update(data);
    return profile;
  } catch (error) {
    throw new Error(error.message);
  }
};

const createProfileService = async (data) => {
  const db = conn.getDbConnection();

  try {
    const profile = await db(table).insert(data);
    return profile;
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteProfileService = async (id) => {
  const db = conn.getDbConnection();

  try {
    const profile = await db(table).where({ iduser: id }).del();
    return profile;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  getAllProfileService,
  getProfileByIdService,
  updateProfileService,
  createProfileService,
  deleteProfileService,
};
