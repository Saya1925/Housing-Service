const express = require('express');
const router = express.Router();
const db = require('./db');
const session = require('express-session');

//  use body-parser for login
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// use session
router.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
  })
);


// Route to test the database connection
router.get('/test-db', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM user');
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
    const [rows] = await db.query(sql);
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
      req.session.userName = result[0].sname + " " + result[0].lname;
      req.session.userID = result[0].userID;
      req.session.email = result[0].email;
      req.session.member = result[0].membership;
      req.session.memberFee = result[0].membershipFee;
      req.session.memberDate = result[0].membershipDate;
      req.session.pro = result[0].professional;
      req.session.proFee = result[0].professionalFee;
      req.session.proDate = result[0].professionalDate;
      res.send({ message: 'Login successful', userID: result[0].userID, userName: result[0].sname + " " + result[0].lname });
      console.log(req.session);
      console.log(result);
    } else {
      // User doesn't exist or wrong password
      res.send({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error connecting to database');
  }
});

// define session
router.get('/session', (req, res) => {
  const sessionData = {
    email: req.session.email,
    userID: req.session.userID,
    userName: req.session.userName,
    member: req.session.member,
    memberFee: req.session.memberFee,
    memberDate: req.session.memberDate,
    pro: req.session.pro,
    proFee: req.session.proFee,
    proDate: req.session.proDate
  };
  res.json(sessionData);
});


// Route to retrieve the customer (targetTaskCreatedBy) or professional (targetTaskDoneBy)
router.get('/get-user', async (req, res) => {
  try {
    const { userID } = req.query;
    const sql = `SELECT * FROM user WHERE userID = ?`;
    const [rows] = await db.query(sql, [userID]);
    res.send(rows);
    // console.log("now using: " + userID);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error connecting to the database');
  }
});



module.exports = router;