const conn = require("../config/dbConn");

const allCourseEnrollService = async () => {
  const db = conn.getDbConnection();
  try {
    const result = await db("courses AS c")
      .leftJoin("user_courses AS uc", "c.idcourses", "uc.course_id")
      .select("c.name AS course_name")
      .count("uc.user_id AS enrolled_user_count")
      .groupBy("c.idcourses", "c.name")
      .orderBy("enrolled_user_count", "desc");
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

const allUserCourseProgressService = async () => {
  const db = conn.getDbConnection();
  try {
    const result = await db("user_courses AS uc")
      .innerJoin("user AS u", "uc.user_id", "u.iduser")
      .innerJoin("courses AS c", "uc.course_id", "c.idcourses")
      .select(
        "u.iduser AS user_id",
        "u.name AS user_name",
        "c.idcourses AS course_id",
        "c.name AS course_name",
        "uc.progress"
      )
      .whereNotNull("uc.user_id") // Optional, but aligns with your SQL
      .whereNotNull("uc.course_id"); // Optional, but aligns with your SQL
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  allCourseEnrollService,
  allUserCourseProgressService,
};
