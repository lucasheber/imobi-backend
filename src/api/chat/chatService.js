const chat = require('./chat')

chat.methods(['get', 'post', 'put', 'delete'])
chat.updateOptions({ new: true, runValidators: true })

module.exports = chat