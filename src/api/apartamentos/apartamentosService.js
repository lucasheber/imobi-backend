const apartamentos = require('./apartamentos')

apartamentos.methods(['get', 'post', 'put', 'delete'])
apartamentos.updateOptions({new: true, runValidators: true})

module.exports = apartamentos