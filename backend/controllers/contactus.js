const messageSchema = require('../model/contactus');

exports.postMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newMessage = new messageSchema({ name, email, message });
    await newMessage.save();
    res.status(200).json({ message: 'Message sent successfully', newMessage });
  } catch (err) {
    console.error('Error sending message:', err);
    res.status(500).json({ error: 'An error occurred while sending the message' });
  }
};