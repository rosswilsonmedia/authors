const mongoose = require('mongoose');

const AuthorSchema = mongoose.Schema({
    name:{
        type: String,
        minlength: [3, 'name must be at least three characters long']
    }
},
{timestamps: true})

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;