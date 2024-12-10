/**
 * Handles the HTTP GET request to retrieve all teachers from the database.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 *
 * Queries the database to select all records from the 'teachers' table.
 * If successful, responds with a JSON object containing the list of teachers.
 * In case of an error, responds with a 500 status and an error message.
 */
const getAllTeachersController = async (req, res) => {
  console.log(req);
  try {
    const query = "SELECT * FROM teachers";
    db.query(query, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(200).json({ teachers: result });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllTeachersController,
};
