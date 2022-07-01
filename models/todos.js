const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true,

    },
    done: {
        type: mongoose.SchemaTypes.Boolean, required: true
    },

})

module.exports = mongoose.model('todo', TodoSchema);