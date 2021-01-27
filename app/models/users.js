const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id: mongoose.Types.ObjectId,
    firstname:{ type: String, required: true },
    lastname:{ type: String, required: true },
    level:{ type: INT, required: true },
    email: { type: String, required: true, unique: true, match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ },
    password: { type: String, required: true }

});

module.exports = mongoose.model('User', userSchema);