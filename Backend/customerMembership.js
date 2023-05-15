// connect to the database
const db = require('./db');
const express = require('express');
const router = express.Router();
const app = express();

// use body-parser for subscribe
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// change the status for customer memberShip

// get the customer membership form database
router.get('/customerMembershipS', async (req, res) => {
    try {
        const { userID, membershipFee } = req.query;

        const membershipDate = new Date().toISOString(); // Get the current date in ISO format

        const sql = 'UPDATE user SET membership = 1, membershipFee = ?, membershipDate = ? WHERE userID = ?';
        await db.query(sql, [membershipFee, membershipDate, userID]);
        res.send('Congratulations! Successful subscriber membership');
        console.log(membershipFee);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error connecting to the database');
    }
});
// router.get('/customerMembershipS', async (req, res) => {
//     try {
//         const { userID } = req.body;

//         const sql = 'UPDATE user SET membership = 1 WHERE userID = ?'
//         await db.query(sql, [userID]);
//         res.send('Congratulations! Successful subscriber memberhsip')
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error connecting to database');
//     }
// });


module.exports = router;