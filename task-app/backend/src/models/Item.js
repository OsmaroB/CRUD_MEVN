const { Schema, model} = require('mongoose');//Schema es lo que quiero guardar de los datos o como quiero que sean
//El modelo es como consulta y actualiza


const itemSchema = new Schema({
    name: String,
    price: {
        type:Number,
        required: true
    }
},{
    timestamps: true
});

module.exports = model('Item', itemSchema);