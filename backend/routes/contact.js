const express = require('express');
const contactRouter = express.Router();
const contactController = require('../controllers/contact');

contactRouter.get('/getuser', contactController.getUsers);
contactRouter.post('/adduser', contactController.addUser);
contactRouter.put('/updateuser/:id', contactController.updateUser);
contactRouter.delete('/deleteuser/:id', contactController.deleteUser);
contactRouter.get('/getuser/:id', contactController.getUniqueUser);

module.exports = contactRouter;
