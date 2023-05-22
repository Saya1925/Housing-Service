const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');
const Handlebars = require('handlebars');
const db = require('./db');

const templateFilePath = path.join(__dirname, 'reportTemplate.hbs');

async function generateReport() {
  try {
    const templateContent = fs.readFileSync(templateFilePath, 'utf-8');
    const template = Handlebars.compile(templateContent);

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

    // Create a PDF document using pdfkit and add the rendered template content to it:
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream('report.pdf'));
    doc.font('Helvetica').fontSize(12).text(renderedTemplate, { align: 'left' });
    doc.end();
  } catch (error) {
    console.error('Error generating report:', error);
  }
}

module.exports = generateReport;
