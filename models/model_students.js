const mongoose = require('mongoose'); 
mongoose.connect('mongodb+srv://tsiw:GAa8xvmV3eKrVa8C@cluster0.b0vmz.mongodb.net/TSIW?retryWrites=true&w=majority'); 

const studentsSchema = new mongoose.Schema({
    nome: String, 
    email: String
})

const Students = mongoose.model('Students', studentsSchema);

exports.Students = Students;