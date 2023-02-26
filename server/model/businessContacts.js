let mongoose = require('mongoose');
let businessContactModel = mongoose.Schema({
    name: String,
    number: String,
    email: String
},

{
    collection:"businessContacts"
});

module.exports = mongoose.model('businessContact',businessContactModel);