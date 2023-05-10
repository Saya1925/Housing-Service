//hello world
/*
const amount = 12

if (amount < 10){
    console.log("small number")
} else {
    console.log("large number")
}

console.log("it is first establish!!")

// testing for send and get request and run in local port
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});


console.log(__dirname)
console.log(__filename)

let num = 0
setInterval(() => {    
    num += 1
    console.log(num)
},1000)
*/

/* literals
let word1 = 'DD';
let word2 = 'SE';
let num1 = 2;
let num2 = 3;

//const fullname = `${num1 + num2} ${word2}`;
//console.log(fullname);
let example = `${word1} ${word2}`;
console.log(example);
document.getElementById("example").innerText = example;
*/

// Destructuring
/*
const personalInformation = {
    firstName: 'Dya',
    lastName: 'Irs',
    city: 'Austin',
    state: 'Texas',
    zipCode: 73301
};

const {firstName: fn, lastName: ln} = personalInformation;

console.log(`${fn} ${ln}`);

let [fn, mn] = ["XX", "YYY", "ZZZZ"]
console.log(fn + mn);
*/

const express = require('express');
const app = express();

// calling the db connection
const db = require('./db');

// Serve static files from the public folder
app.use(express.static('public'));

//  use body-parser for login
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// app.get('/', (req, res) => {
//     res.send('Hello World!');
//   });

// Route to test the database connection
app.get('/test-db', async (req, res) => {
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
app.get('/get-latest-user', async (req, res) => {
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
app.post('/add-user', async (req, res) => {
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
app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', async (req, res) => {
    const { email, pw } = req.body;

    try {
        const sql = `SELECT * FROM user WHERE email='${email}' AND pw='${pw}'`;
        const [result] = await db.query(sql);

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

// create a task
app.post('/add-task', async (req, res) => {
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
app.get('/get-latest-task', async (req, res) => {
    try {
        const sql = 'SELECT * FROM taskList ORDER BY taskID DESC LIMIT 1';
        const [rows, fields] = await db.query(sql);
        res.send(rows);
        console.log(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error connecting to database');
    }
});


// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
