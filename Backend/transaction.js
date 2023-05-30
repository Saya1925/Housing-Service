const express = require('express');
const router = express.Router();
const db = require('./db');

//  use body-parser for login
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


// create a customer transcation record
router.post('/customerTransaction', async (req, res) => {
    try {
        const { userID, taskID, userName, cardNum, cardHolder, billAddress, serviceFee, platformCharge, totalFee, offerID } = req.body;

        const sqlInsert = `INSERT INTO customerTran (userID, taskID, userName, cardNum, cardHolder, billAddress, serviceFee, platformCharge, totalFee)
                    VALUES ('${userID}', '${taskID}', '${userName}', '${cardNum}', '${cardHolder}', '${billAddress}', '${serviceFee}', '${platformCharge}', '${totalFee}')`;

        const sqlUpdateOffer = `UPDATE offerList SET success = 1 WHERE offerOrder = '${offerID}'`;
        const sqlUpdateTask = `UPDATE taskList 
                            SET status = 'onGoing', doneBy = (
                            SELECT offeredBy 
                            FROM offerList 
                            WHERE offerOrder = '${offerID}'
                            )
                            WHERE taskID = '${taskID}'`;

        const [result] = await db.query(sqlInsert);
        // await db.query(sqlInsert);
        await db.query(sqlUpdateOffer);
        await db.query(sqlUpdateTask);

        console.log(`New transcation record with ID ${result.insertId} has been added`);
        res.send('Transaction is successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error adding task');
    }
});

// create a professional transcation record
router.post('/professionalTransaction', async (req, res) => {
    try {
        const { userID, taskID, userName, cardNum, cardHolder, billAddress, serviceFee, commission, totalPayment } = req.body;

        const sqlInsert = `INSERT INTO professionalPay (userID, taskID, userName, cardNum, cardHolder, billAddress, serviceFee, commission, totalPayment)
                    VALUES ('${userID}', '${taskID}', '${userName}', '${cardNum}', '${cardHolder}', '${billAddress}', '${serviceFee}', '${commission}', '${totalPayment}')`;
        const sqlUpdateTask = `UPDATE taskList 
                            SET status = 'taskComplete', transaction = '${totalPayment}', commission = '${commission}'
                            WHERE taskID = '${taskID}'`;

        const [result] = await db.query(sqlInsert);
        await db.query(sqlUpdateTask);

        console.log(`New transcation record with ID ${result.insertId} has been added`);
        res.send('Your Payment is successfully set');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error adding task');
    }
});

// create a professional transcation record
// router.post('/customerTransaction', async (req, res) => {
//     try {
//         const { userID, taskID, userName, cardNum, cardHolder, billAddress, serviceFee, platformCharge, totalFee } = req.body;

//         const sql = `INSERT INTO customerTran (userID, taskID, userName, cardNum, cardHolder, billAddress, serviceFee, platformCharge, totalFee)
//                     VALUES ('${userID}', '${taskID}', '${userName}', '${cardNum}', '${cardHolder}', '${billAddress}', '${serviceFee}', '${platformCharge}', '${totalFee}')`;

//         const [result] = await db.query(sql);

//         console.log(`New transcation record with ID ${result.insertId} has been added`);
//         res.send('Task added successfully');
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error adding task');
//     }
// });


// Route to retrieve the data from customerTran
router.get('/get-transaction', async (req, res) => {
    try {
      const sql = 'SELECT * FROM customerTran ORDER BY transactionNum DESC LIMIT 1';
      const [rows] = await db.query(sql);
      res.send(rows);
      console.log(rows);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error connecting to database');
    }
  });


module.exports = router;