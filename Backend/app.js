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
const db = require('./db');

// app.get('/', (req, res) => {
//     res.send('Hello World!');
//   });
  
// Route to test the database connection
app.get('/', async (req, res) => {
  try {
    const [rows, fields] = await db.query('SELECT * FROM user');
    res.send(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error connecting to database');
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
