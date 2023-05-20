// defining the app & framework
const express = require('express');
const app = express();

//Allow access from localhost3000
const cors = require('cors');
app.use(cors());

// add & use body-parser module for login
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.get('/', (req, res) => {
//     res.send('Hello World!');
//   });


/**********
 * importing the working files..
***********/

// calling the db connection
const db = require('./db');

// calling account.js
const accountRoutes = require('./account.js');
// register the account routes
app.use('/account', accountRoutes);

// calling membership.js
const customerMembershipRoutes = require('./customerMembership.js')
// register the membership subscription routes
app.use('/customerMembership', customerMembershipRoutes);

// calling professional.js
const professionalsMembershipRoutes = require('./professionalsMembership.js')
// register the professional subscription routes
app.use('/professionalsMembership', professionalsMembershipRoutes);

// calling createTask.js
const createTaskRoutes = require('./createTask.js');
// register the create task routes
app.use('/createTask', createTaskRoutes);

// calling getLast10Tasks.js
const getLast10TasksRoutes = require('./getLast10Tasks.js');
// register the get the last 10 tasks routes
app.use('/getLast10Tasks', getLast10TasksRoutes);

// calling getTask.js
const getTaskRoutes = require('./getTask.js');
// register the create task routes
app.use('/getTask', getTaskRoutes);

// calling getTask.js
const offerRoutes = require('./offer.js');
// register the create task routes
app.use('/offer', offerRoutes);

// calling transaction.js
const transactionRoutes = require('./transaction.js');
// register the create task routes
app.use('/transaction', transactionRoutes);


/**********
 * set up the running of the backend application..
***********/

// Serve static files from the public folder
app.use(express.static('public'));

// Start the server
app.listen(3001, () => {
    console.log('Server started on port 3001');
});