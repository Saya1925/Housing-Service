// connect to the database
const mysql = require('mysql2/promise');
const connection = mysql.createConnection({
  host: 'housingservice.c33lugaz7gku.us-east-1.rds.amazonaws.com',
  port: '3306',
  user: 'admin',
  password: '950Housing',
  database: 'HousingService',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});


const express = require('express');
const router = express.Router();
const app = express();

// use body-parser for subscribe
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

// change the status for customer memberShip

// get the customer membership form database
app.post('/customerMembership', async(req, res) => {
    const {userID} = req.params;
    const {newStatus} = req.body;

    (await connection).query(
        'UPDATE CustomerMembership SET status = 1 WHERE user_id = ? ',
        [newStatus, userID],
        (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).send('Error, can not update membership status');
            } else{
                res.send('Congratulations! Successful subscriber membership')
            }
        }
    );
});

const port  = 3000;
app.listen(port, () => {
    console.log('Server is running')
});