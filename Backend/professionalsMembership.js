// connect to the database
const db = require('./db');
const express = require('express');
const router = express.Router();

// use body-parser for subscribe
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// change the status for customer memberShip

// get the professional membership form database
router.get('/professionalsMembershipS', async (req, res) => {
    try {
        const { userID, professionalFee } = req.query;

        const professionalDate = new Date().toISOString(); // Get the current date in ISO format

        const sql = 'UPDATE user SET professional = 1, professionalFee = ?, professionalDate = ? WHERE userID = ?';
        await db.query(sql, [professionalFee, professionalDate, userID]);
        res.send('Congratulations! Successful subscriber membership');
        console.log(professionalFee);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error connecting to the database');
    }
});


module.exports = router;