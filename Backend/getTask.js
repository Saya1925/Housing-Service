const express = require('express');
const router = express.Router();
const db = require('./db');

//  use body-parser for login
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


// Route to retrieve tasks for selecting panel - General, by latest
router.get('/byLatest', async (req, res) => {
  try {
    // const { } = req.query;
    const sql = 'SELECT * FROM taskList WHERE status = "awaiting" ORDER BY taskID DESC LIMIT 10';
    const [rows] = await db.query(sql);
    res.send(rows);
    // console.log(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error connecting to database');
  }
});

// Route to retrieve tasks for selecting panel - My Requests tasks
router.get('/myRequest', async (req, res) => {
  try {
    // console.log("shoooooooow my Request")
    const { userID } = req.query;
    const sql = 'SELECT * FROM taskList WHERE createdBy = ? ORDER BY taskID DESC LIMIT 10';
    const [rows] = await db.query(sql, [userID]);
    res.send(rows);
    // console.log(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error connecting to database');
  }
});

// Route to retrieve tasks for selecting panel - My mission tasks
router.get('/myMission', async (req, res) => {
  try {
    const { userID } = req.query;
    const sql = 'SELECT * FROM taskList WHERE doneBy = ? ORDER BY taskID DESC LIMIT 10';
    const [rows] = await db.query(sql, [userID]);
    res.send(rows);
    // console.log(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error connecting to database');
  }
});


// Route to retrieve the taget Task by required taskID
router.get('/get-target-task', async (req, res) => {
  try {
    const { taskID } = req.query;
    const sql = 'SELECT * FROM taskList WHERE taskID = ?';
    const [rows] = await db.query(sql, [taskID]);
    res.send(rows);
    // console.log(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error connecting to the database');
  }
});


// // Route to retrieve the quotation by targetTaskID where success is 1
// router.get('/get-target-offer', async (req, res) => {
//   try {
//       const { taskID } = req.query;
//       const sql = 'SELECT * FROM offerList WHERE taskID = ? AND success = 1';
//       const [rows] = await db.query(sql, [taskID]);
//       res.send(rows);
//       // console.log(rows);
//   } catch (error) {
//       console.error(error);
//       res.status(500).send('Error connecting to the database');
//   }
// });



// Route to retrieve the offerList with targetTaskID
router.get('/getOfferList', async (req, res) => {
  try {
    const { taskID } = req.query;
    const sql = `
        SELECT
        offerList.*,
        taskList.status,
        userConcat.userName,
        ROUND(ratingCalc.rating, 1) AS rating
      FROM offerList
      LEFT JOIN (
        SELECT
          offerList.offeredBy,
          CONCAT(user.sname, ' ', user.lname) AS userName
        FROM offerList
        JOIN user ON offerList.offeredBy = user.userID
        WHERE offerList.taskID = ?
        GROUP BY offerList.offeredBy
      ) AS userConcat ON offerList.offeredBy = userConcat.offeredBy
      LEFT JOIN (
        SELECT
          offerList.offeredBy,
          AVG(taskList.rating) AS rating
        FROM offerList
        JOIN taskList ON offerList.offeredBy = taskList.doneBy
        WHERE offerList.taskID = ?
          AND taskList.status IN ('taskReviewed', 'taskComplete')
        GROUP BY offerList.offeredBy
      ) AS ratingCalc ON offerList.offeredBy = ratingCalc.offeredBy
      LEFT JOIN taskList ON offerList.taskID = taskList.taskID
      WHERE offerList.taskID = ?
      ORDER BY offerOrder DESC;
      
        `;
    const [rows] = await db.query(sql, [taskID, taskID, taskID]);
    res.send(rows);
    console.log(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error connecting to the database');
  }
});

// update task from onGoing to taskDone 
router.post('/toTaskDone', async (req, res) => {
  try {
    const { taskID } = req.body;
    const sqlUpdateTask = `UPDATE taskList SET status = "taskDone" WHERE taskID = '${taskID}'`;

    const [result] = await db.query(sqlUpdateTask);

    console.log(`Status of ${result.taskID} changed to "taskDone"`);
    res.send('status change successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error changing status');
  }
});

// update task from onGoing to taskDone 
router.post('/totaskReviewed', async (req, res) => {
  try {
    const { taskID, rating, comment } = req.body;
    // const sqlUpdateTask = `UPDATE taskList SET status = "taskReviewed" WHERE taskID = '${taskID}'`;
    const sqlUpdateTask = `UPDATE taskList SET status = 'taskReviewed', rating = '${rating}', comment = '${comment}' WHERE taskID = '${taskID}'`;
    const [result] = await db.query(sqlUpdateTask);

    console.log(`Status of ${result.taskID} changed to "taskReviewed"`);
    res.send('status change successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error changing status');
  }
});

// // Route to retrieve the task's status
// router.get('/getStatus', async (req, res) => {
//     try {
//         const { taskID } = req.query;
//         const sql = `
//             SELECT status from taskList where taskID = ? ;
//         `;
//         const [rows] = await db.query(sql, [taskID]);
//         res.send(rows);
//         console.log(rows);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error connecting to the database');
//     }
// });


// // Route to retrieve the offerList with targetTaskID
// router.get('/getOfferList', async (req, res) => {
//     try {
//         const { taskID } = req.query;
//         const sql = 'SELECT * FROM offerList WHERE taskID = ?';
//         const [rows] = await db.query(sql, [taskID]);
//         res.send(rows);
//         console.log(rows);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error connecting to the database');
//     }
// });

module.exports = router;