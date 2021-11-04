const Model = require('../models/model_students');
const Students = Model.Students;

const create = (req, res) => {
    let obj = new Students({
        nome: req.body.nome,
        email: req.body.email,
    })

    obj.save().then(response => {
        res.status(200).json(response);
    }).catch(error => {
        res.status(400).send("Error: " + error);
    })
}

const listByEmail = (req, res) => {
    Students.find({
        email: req.query.email
    }).then((studentslist) => {
        res.status(200).json(studentslist)
    }).catch((error) => {
        res.status(400).send('Error');
    })
}

const listAll = (req, res) => {
    Students.find().then((studentslist) => {
        res.status(200).json(studentslist)
    }).catch((error) => {
        res.status(400).send('Error');
    })
}

exports.create = create;
exports.listByEmail = listByEmail;
exports.listAll = listAll;