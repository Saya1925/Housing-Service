const express = require('express');
const router = express.Router();
const db = require('./db');

//  use body-parser for login
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Create an offer
router.post('/submit-offer', async (req, res) => {
    try {
        const { message, quotation, offeredBy, createdBy, taskID } = req.body;

        const sql = `INSERT INTO offerList (message, quotation, offeredBy, createdBy, taskID) VALUES (?, ?, ?, ?, ?)`;
        const [result] = await db.query(sql, [message, quotation, offeredBy, createdBy, taskID]);

        console.log(`New offer with ID ${result.insertId} has been created`);
        res.send('Offer submitted successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error submitting offer');
    }
});


// Define the route to fetch the createdBy value
router.get('/fetch-created-by', async (req, res) => {
    try {
        const taskID = req.query.taskID;

        const sql = 'SELECT * FROM taskList WHERE taskID = ?';
        const [rows] = await db.query(sql, [taskID]);

        console.log(rows[0]);
        if (rows.length > 0) {
            const createdBy = rows[0].createdBy;
            const status = rows[0].status;
            const doneBy = rows[0].doneBy;
            res.send({ createdBy, status, doneBy });
            console.log("this task status: " + status);
        } else {
            res.status(404).send('Task not found');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching createdBy');
    }
});

// Route to retrieve the customer (targetTaskCreatedBy) or professional (targetTaskDoneBy)
router.get('/get-user', async (req, res) => {
    try {
      const { userID } = req.query;
      const sql = `SELECT * FROM user WHERE userID = ?`;
      const [rows] = await db.query(sql, [userID]);
      res.send(rows);
      // console.log("now using: " + userID);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error connecting to the database');
    }
  });

  // Route to retrieve the customer (targetTaskCreatedBy) or professional (targetTaskDoneBy)
router.get('/get-target-offer', async (req, res) => {
    try {
      const { taskID } = req.query;
      const sql = `SELECT * FROM offerList WHERE taskID = ? AND success = 1`;
      const [rows] = await db.query(sql, [taskID]);
      res.send(rows);
      // console.log("now using: " + userID);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error connecting to the database');
    }
  });

module.exports = router;