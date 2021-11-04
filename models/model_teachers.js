const mongoose = require('mongoose'); 
mongoose.connect('mongodb+srv://tsiw:GAa8xvmV3eKrVa8C@cluster0.b0vmz.mongodb.net/TSIW?retryWrites=true&w=majority'); 

const teachersSchema = new mongoose.Schema({
    nome: String, 
    email: String,
    uc: String
})

const Teachers = mongoose.model('Teachers', teachersSchema);

exports.Teachers = Teachers;