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

        const sql = 'SELECT createdBy FROM taskList WHERE taskID = ?';
        const [rows, fields] = await db.query(sql, [taskID]);

        console.log(rows[0]);
        if (rows.length > 0) {
            const createdBy = rows[0].createdBy;
            res.send({ createdBy });
        } else {
            res.status(404).send('Task not found');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching createdBy');
    }
});

module.exports = router;