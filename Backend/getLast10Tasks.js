const db = require('./db');
const express = require('express');
const router = express.Router();
// const app = express();

// use body-parser for subscribe
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.get('/getTasks', async(req, res) => {
    try {
        const sql = 'SELECT * FROM taskList ORDER BY taskID DESC LIMIT 10';
        const [rows] = await db.query(sql);
        res.send(rows);
        console.log(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error connecting to database');
    }
    
});

module.exports = router;