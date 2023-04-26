const express = require('express');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Route to handle user registration
app.post('/register', async (req, res) => {
  try {
    // Get the user data from the request body
    const { name, email, password } = req.body;

    // Check if the email already exists in the database
    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    if (rows.length > 0) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Hash the user password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    // Insert the user data into the database
    const result = await db.query('INSERT INTO users SET ?', { name, email, password: hash });

    // Send a success response
    res.status(200).json({ message: 'Registration successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Registration failed' });
  }
});

// Start the server
app.listen(3000, () => console.log('Server started on port 3000'));
