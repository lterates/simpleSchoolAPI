const Model = require('../models/model_teachers');
const Teachers = Model.Teachers;

const create = (req, res) => {
    let obj = new Teachers({
        nome: req.body.nome,
        email: req.body.email,
        uc: req.body.uc
    })
    obj.save().then(response => {
        res.status(200).json(response)
    }).catch(error => {
        res.status(400).json("Error: " + error)
    })
}

const listByEmail = (req, res) => {
    Teachers.find({
        email: req.body.email
    }).then((teachersList => {
        res.status(200).json(teachersList)
    })).catch(error => {
        res.status(400).json("Error: " + error)
    })
}

const listAll = (req, res) => {
    Teachers.find().then((teachersList) => {
        res.status(200).json(teachersList)
    }).catch((error) => {
        res.status(400).send('Error: ' + error);
    })
}

exports.create = create;
exports.listByEmail = listByEmail;
exports.listAll = listAll;