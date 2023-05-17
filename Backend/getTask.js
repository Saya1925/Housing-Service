const express = require('express');
const router = express.Router();
const db = require('./db');

//  use body-parser for login
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

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

module.exports = router;