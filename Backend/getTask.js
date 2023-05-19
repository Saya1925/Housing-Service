const express = require('express');
const router = express.Router();
const db = require('./db');

//  use body-parser for login
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


// Route to retrieve tasks for selecting panel - General, by latest
router.get('/byLatest', async(req, res) => {
    try {
        const sql = 'SELECT * FROM taskList ORDER BY taskID DESC LIMIT 15';
        const [rows, fields] = await db.query(sql);
        res.send(rows);
        console.log(rows);
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
        const [rows, fields] = await db.query(sql, [taskID]);
        res.send(rows);
        console.log(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error connecting to the database');
    }
});

// Route to retrieve the offerList with targetTaskID
router.get('/getOfferList', async (req, res) => {
    try {
        const { taskID } = req.query;
        const sql = `
            SELECT offerList.*, taskList.status, userConcat.userName, ROUND(ratingCalc.rating, 1) AS rating
            FROM offerList
            LEFT JOIN (
                SELECT offerList.offeredBy, CONCAT(user.sname, ' ', user.lname) AS userName
                FROM offerList
                JOIN user ON offerList.offeredBy = user.userID
                WHERE offerList.taskID = ?
                GROUP BY offerList.offeredBy
            ) AS userConcat ON offerList.offeredBy = userConcat.offeredBy
            LEFT JOIN (
                SELECT offerList.offeredBy, AVG(taskList.rating) AS rating
                FROM offerList
                JOIN taskList ON offerList.offeredBy = taskList.doneBy
                WHERE taskList.status = 'taskComplete' AND offerList.taskID = ?
                GROUP BY offerList.offeredBy
            ) AS ratingCalc ON offerList.offeredBy = ratingCalc.offeredBy
            LEFT JOIN taskList ON offerList.taskID = taskList.taskID
            WHERE offerList.taskID = ? ORDER BY offerOrder DESC;
        `;
        const [rows, fields] = await db.query(sql, [taskID, taskID, taskID]);
        res.send(rows);
        console.log(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error connecting to the database');
    }
});

// // Route to retrieve the task's status
// router.get('/getStatus', async (req, res) => {
//     try {
//         const { taskID } = req.query;
//         const sql = `
//             SELECT status from taskList where taskID = ? ;
//         `;
//         const [rows, fields] = await db.query(sql, [taskID]);
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
//         const [rows, fields] = await db.query(sql, [taskID]);
//         res.send(rows);
//         console.log(rows);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error connecting to the database');
//     }
// });

module.exports = router;