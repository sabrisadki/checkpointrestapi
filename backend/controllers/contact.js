const ContactSchema = require('../model/contact');

const getUsers = async (req, res) => {
  try {
    const contc = await ContactSchema.find();
    res.status(200).json({ msg: 'this is your user list', contc });
  } catch (err) {
    console.log(err);
  }
};

const addUser = async (req, res) => {
  try {
    const newContact = new ContactSchema(req.body);
    await newContact.save();
    res.status(200).json({ msg: 'you could add your new contact', newContact });
  } catch (err) {
    console.log(err);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updateuser = await ContactSchema.findByIdAndUpdate(id, { $set: { ...req.body } });
    res.status(200).json({ msg: 'you could update me', updateuser });
  } catch (err) {
    console.log(err);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletcont = await ContactSchema.findByIdAndDelete(id);
    res.status(200).json({ msg: 'you deleted that user' });
  } catch (err) {
    console.log(err);
  }
};

const getUniqueUser = async (req, res) => {
  try {
    const { id } = req.params;
    const getuniqueuser = await ContactSchema.findById(id);
    res.status(200).json({ msg: 'you found that user', getuniqueuser });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
  getUniqueUser,
};


