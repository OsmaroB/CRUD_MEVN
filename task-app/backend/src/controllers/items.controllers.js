const itemControll = {};
const Item = require('../models/Item');

//RECOLECCION DE NOTAS
itemControll.getItems = async (req,res) => {
    const items = await Item.find();//Conseguimos un arreglo de objetos json con el contenido de notas
    res.json(items);//Le debolvemos a la aplicacion cliente el arreglo json de notas 
};

//CREACION DE NOTAS
itemControll.createItem = async (req,res) => {
    const { name, price } = req.body;
    //Creamos el modelo que sera como se guardara por el req.body
    const newItem = new Item({
        name,
        price
    })
    await newItem.save();//Guardamos la nota en la base de datos
    res.json({message: 'POST Request'});
};
//RECOLECCION DE UNA NOTA
itemControll.getItem = async(req,res) => {
    const item = await Item.findById(req.params.id);
    res.json(item)
};

//Actualizar nota por medio del id
itemControll.updateItem = async (req,res) => {
    const {name,price} = req.body;
    await Item.findOneAndUpdate({_id: req.params.id}, {
        name,
        price
    });
    res.json({message: 'Note update'})
};

//ELIMINACION DE UNA NOTA
itemControll.deleteItem = async (req,res) => {
    //Eliminamos una nota por medio de su id
    await Item.findByIdAndDelete(req.params.id);
    res.json({message: 'Note '+req.params.id+' delete'})//Respondemos al servidor cliente
};


module.exports = itemControll;