import express from 'express';
//import sendEmail from '../utils/sendEmail'; // Import the function to send emails

const router = express.Router();

// Route to handle form submission
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, productId, productTitle } = req.body;

    // Perform any necessary validation on the form data - add method in utils for phone, email regex
    if (!email) {
      res.status(500).json({ error: 'Email is required to proceed' });
    }

    // move this to the middleware
    const mailOptions = {
      from: 'jay.kapadia2020@gmail.com', // Sender's email address
      to: 'jay.kapadia2020@gmail.com', // Recipient's email address
      subject: 'New Enquiry',
      text: `Enquiry for product Product Title: ${productTitle} by our customer; details as mentioned below\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`,
    };
    console.log(mailOptions);
    
    //add method to util
    //await sendEmail(mailOptions);

    res.status(200).json({ message: 'Enquiry submitted successfully' });
  } catch (error) {
    console.error('Error submitting enquiry:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
