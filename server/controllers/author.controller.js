const Author = require('../models/author.model');

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(newAuthor => res.json(newAuthor))
        .catch(err => res.status(400).json({message: 'Something went wrong', error: err}))
}

module.exports.findAllAuthors = (req, res) => {
    Author.find({})
        .then(allAuthors=>res.json(allAuthors))
        .catch(err => res.status(400).json({message: 'Something went wrong', error: err}))
}

module.exports.findOneAuthor = (req, res) => {
    Author.findOne({_id: req.params.id})
        .then(oneAuthor => res.json(oneAuthor))
        .catch(err => res.status(400).json({message: 'Something went wrong', error: err}))
}

module.exports.updateOneAuthor = (req, res) => {
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {
        new: true,
        runValidators: true
    })
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.status(400).json({message: 'Something went wrong', error: err}))
}

module.exports.deleteOneAuthor = (req, res) => {
    Author.deleteOne({_id: req.params.id})
        .then(deleteConfirm => res.json(deleteConfirm))
        .catch(err => res.status(400).json({message: 'Something went wrong', error: err}))
}