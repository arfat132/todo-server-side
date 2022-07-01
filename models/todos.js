const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true,

    },
    date: {
        type: Date,
        required: true,

    }

})

module.exports = mongoose.model('todo', TodoSchema);