const express = require('express'); 
const router = express.Router(); 
const { body, validationResult } = require('express-validator'); 
const controller = require('../controllers/controller_teacher'); 

router.route('/').get(function(req, res) {
    if(req.query.email && req.query.email != '') {
       controller.listByEmail(req, res); 
    } else {
       controller.listAll(req, res); 
    }
}).post([
    body('email').notEmpty().isEmail(),
    body('nome').notEmpty().isString(),
    body('uc').notEmpty().isString().escape(),
],function(req, res) { 
    const errors = validationResult(req); 
    if(errors.isEmpty()) {
       controller.create(req, res); 
    } else {
        res.status(400).send(errors); 
    }
})

module.exports = router; 