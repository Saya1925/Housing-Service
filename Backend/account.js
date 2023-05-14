const express = require('express');
const router = express.Router();
const db = require('./db');

//  use body-parser for login
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


// Route to test the database connection
router.get('/test-db', async (req, res) => {
    try {
        const [rows, fields] = await db.query('SELECT * FROM user');
        res.send(rows);
        console.log(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error connecting to database');
    }
});

// Route to retrieve the latest added User
router.get('/get-latest-user', async (req, res) => {
    try {
        const sql = 'SELECT * FROM user ORDER BY userID DESC LIMIT 1';
        const [rows, fields] = await db.query(sql);
        res.send(rows);
        console.log(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error connecting to database');
    }
});


// Route to create a new User on DB
router.post('/add-user', async (req, res) => {
    try {
        const { sname, lname, email, phoneNum, pw, membership, professional } = req.body;

        const sql = `INSERT INTO user (sname, lname, email, phoneNum, pw, membership, professional)
                    VALUES ('${sname}', '${lname}', '${email}', '${phoneNum}', '${pw}', '${membership}', '${professional}')`;

        const [result] = await db.query(sql);

        res.send('Registration successful');
        console.log(`New user with ID ${result.insertId} has been added`);
        // res.send(`New user with ID ${result.insertId} has been added`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Registration failed');
    }
});

// Login System
// router.get('/login', (req, res) => {
//     res.render('login');
// });

/** Backup
router.post('/login', async (req, res) => {
  const { email, pw } = req.body;

    try {
        const sql = `SELECT * FROM user WHERE email='${email}' AND pw='${pw}'`;
        const [result] = await db.query(sql);
        console.log("using: " + email + " ; " + pw);
        // console.log(req.body.email);

        if (result.length > 0) {
            // User exists, login successful
            res.send('Login successful');
        } else {
            // User doesn't exist or wrong password
            res.send('Invalid email or password');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error connecting to database');
    }
});
**/
router.post('/login', async (req, res) => {
    const { email, pw } = req.body;
  
    try {
      const sql = `SELECT * FROM user WHERE email='${email}' AND pw='${pw}'`;
      const [result] = await db.query(sql);
      console.log("using: " + email + " ; " + pw);
  
      if (result.length > 0) {
        // User exists, login successful
        res.send({ message: 'Login successful' });
      } else {
        // User doesn't exist or wrong password
        res.send({ message: 'Invalid email or password' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Error connecting to database');
    }
  });
  

module.exports = router;