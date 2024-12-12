const conn = require("../config/dbConn");

const table = "courses";

const getAllCoursesService = async () => {
  const db = conn.getDbConnection();

  try {
    let all = await db(table).count("* as count");
    const courses = await db(table).select("*");
    return { count: all[0].count, courses };
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllCoursesByIdService = async (id) => {
  const db = conn.getDbConnection();

  try {
    const courses = await db(table)
      .select("*", "t.name as teacher_name", "courses.name as course_name")
      .leftJoin("teacher as t", "t.course_id", "courses.idcourses")
      .where({ idcourses: id });
    return courses;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllCoursesByUserIdService = async (userId) => {
  const db = conn.getDbConnection();
  try {
    const courses = await db("delta-courses.courses AS co")
      .select("courses.*", "uc.progress")
      .leftJoin("delta-courses.user AS user", "co.idcourses", "user.iduser")
      .leftJoin("delta-courses.user_courses AS uc", "uc.user_id", "user.iduser")
      .leftJoin(
        "delta-courses.courses AS courses",
        "uc.course_id",
        "courses.idcourses"
      )
      .where("user.iduser", userId)
      .where("uc.user_id", userId);
    return courses;
  } catch (error) {
    throw new Error(error.message);
  }
};

const enrollCourseService = async (courseId, userId) => {
  const db = conn.getDbConnection();
  try {
    const result = await db("user_courses").insert({
      user_id: userId,
      course_id: courseId,
    });
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

const unenrollCourseService = async (courseId, userId) => {
  const db = conn.getDbConnection();
  try {
    const result = await db("user_courses")
      .where({ user_id: userId, course_id: courseId })
      .del();
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateCourseProgressService = async (courseId, userId, progress) => {
  const db = conn.getDbConnection();
  try {
    const result = await db("user_courses")
      .where({ user_id: userId, course_id: courseId })
      .update({ progress });
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  getAllCoursesService,
  getAllCoursesByIdService,
  getAllCoursesByUserIdService,
  enrollCourseService,
  unenrollCourseService,
  updateCourseProgressService,
};
