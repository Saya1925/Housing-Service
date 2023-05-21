const fs = require('fs');
const PDFDocument = require('pdfkit');
const Handlebars = require('handlebars');
const express = require('express');
const router = express.Router();
const db = require('./db');

//  use body-parser for login
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const templateContent = fs.readFileSync('./reportTemplate.hbs', 'utf-8');

const template = Handlebars.compile(templateContent);

async function generateReport() {
    // Function to retrieve the data from customerTran
    async function getTransactionData() {
        const sql = 'SELECT * FROM customerTran ORDER BY transactionNum DESC LIMIT 1';
        const [rows, fields] = await db.query(sql);
        console.log(rows);
        return rows;
    }

    // Fetch data from the getTransactionData function
    const transactions = await getTransactionData();

    // Extract the values from the rows object
    const {
        userName,
        transactionNum,
        userID,
        cardNum,
        cardHolder,
        billAddress,
        serviceFee,
        platformCharge,
        totalFee
    } = transactions[0]; // Assuming there is only one transaction in the result

    // Render the template with the data:
    const renderedTemplate = template({
        userName,
        transactionNum,
        userID,
        cardNum,
        cardHolder,
        billAddress,
        serviceFee,
        platformCharge,
        totalFee
    });

    // // Render the template with the data:
    // const renderedTemplate = template({ transactions });

    // Create a PDF document using pdfkit and add the rendered template content to it:
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream('report.pdf'));
    doc.font('Helvetica').fontSize(12).text(renderedTemplate, { align: 'left' });
    doc.end();
};

module.exports = generateReport;
