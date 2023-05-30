const fs = require('fs');
const PDFDocument = require('pdfkit');
const Handlebars = require('handlebars');
const db = require('./db');
const express = require('express');
const router = express.Router();

// Read the template file
const templateContent = fs.readFileSync('./reportTemplate.hbs', 'utf-8');
const template = Handlebars.compile(templateContent);

// Function to retrieve the data from customerTran
async function getTransactionData() {
  const sql = 'SELECT * FROM customerTran ORDER BY transactionNum DESC LIMIT 1';
  const [rows] = await db.query(sql);
  console.log(rows);
  return rows;
}

// Define the route for generating and downloading the PDF report
router.get('/generateReport', async (req, res) => {
  try {
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

    // Create a PDF document using pdfkit and add the rendered template content to it:
    const doc = new PDFDocument();
    doc.font('Helvetica').fontSize(12).text(renderedTemplate, { align: 'left' });
    doc.pipe(res); // Pipe the PDF directly to the response object
    doc.end();
  } catch (error) {
    console.error(error);
    res.status(500).send('Error generating PDF report');
  }
});

module.exports = router;
