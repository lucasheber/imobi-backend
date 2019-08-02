require('dotenv').config()
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const uri = process.env.MONGODB_URI || 'mongodb://localhost/imobidb'

module.exports = mongoose.connect(uri, {useMongoClient: true})