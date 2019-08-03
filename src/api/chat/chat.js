const restful = require('node-restful')
const mongoose = restful.mongoose

const messageSchema = new mongoose.Schema({
    message: { type: String },
    description: { type: String },
    base: { type: String, default: 'sent' },
    type: { type: String, default: 'text', required: true },
    sendAt: { type: Date, default: Date.now },
    options: []
})

const chatSchema = new mongoose.Schema({
    session_id: { type: String },
    context: {},
    userName: { type: String },
    input: {},
    messages: [messageSchema]
}, { usePushEach: true })

module.exports = restful.model('Chat', chatSchema)