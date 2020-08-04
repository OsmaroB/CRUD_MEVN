const { Schema, model} = require('mongoose');//Schema es lo que quiero guardar de los datos o como quiero que sean
//El modelo es como consulta y actualiza


const noteSchema = new Schema({
    title: String,
    content: {
        type:String,
        required: true
    }
},{
    timestamps: true
});

module.exports = model('Note', noteSchema);