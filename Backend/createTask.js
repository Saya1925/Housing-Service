const express = require('express');
const router = express.Router();
const db = require('./db');

//  use body-parser for login
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// create a task
router.post('/add-task', async (req, res) => {
    try {
        const { createdBy, taskName, budget, category, startDate, endDate, specialReq, location, details, onlineTask } = req.body;

        let locationValue = location;
        if (onlineTask === "on") {
            locationValue = "Online";
        }

        const sql = `INSERT INTO taskList (createdBy, taskName, budget, category, startDate, endDate, specialReq, location, details)
                    VALUES ('${createdBy}', '${taskName}', '${budget}', '${category}', '${startDate}', '${endDate}', '${specialReq}', '${locationValue}', '${details}')`;

        const [result] = await db.query(sql);

        console.log(`New task with ID ${result.insertId} has been added`);
        res.send('Task added successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error adding task');
    }
});


// Route to retrieve the latest added Task
router.get('/get-latest-task', async (req, res) => {
    try {
        const sql = 'SELECT * FROM taskList ORDER BY taskID DESC LIMIT 1';
        const [rows] = await db.query(sql);
        res.send(rows);
        // console.log(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error connecting to database');
    }
});

module.exports = router;