const restful = require('node-restful')
const mongoose = restful.mongoose

const apartamentosSchema = new mongoose.Schema({
    codigo: { type: String, required: true },
    description: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    type: { type: String, required: true },
    imgUrl: { type: String, required: true },
    value: { type: Number, min: 0, required: true },
})


module.exports = restful.model('Apartamentos', apartamentosSchema)