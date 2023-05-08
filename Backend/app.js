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
*/

console.log(__dirname)
console.log(__filename)

let num = 0
setInterval(() => {    
    num += 1
    console.log(num)
},1000)