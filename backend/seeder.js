const moongoose = require('mongoose');
const users = require('./data/users.js');
const products = require('./data/products.js');
const Usuario = require('./models/Usuarios');
const Product = require('./models/productModel');
const Order = require('./models/orderModel');
const {dbConnection} =require('./DB/config')


require('dotenv').config();
//DB Conection carpeta DB
dbConnection();

const importData = async() => {
    try {
    await Order.deleteMany()
    await Product.deleteMany ()
    await Usuario.deleteMany()

    const createdUsers = await Usuario.insertMany(users)
    const adminUser = createdUsers [0]._id
    const sampleProducts = products.map(product => {
        return { ... product, user: adminUser}
    })
    await Product.insertMany(sampleProducts)
    console.log('Data Imported...')
    process.exit()
    }catch(error) {
      console.log(error)
      process.exit(1)
    }
}

const destroyData = async() => {
    try {
    await Order.deleteMany()
    await Product.deleteMany ()
    await Usuario.deleteMany()

    console.log('Data Destroyed...')
    process.exit()
    }catch(error) {
      console.log(error)
      process.exit(1)
    } 
}

if (process.argv[2] === '-d') {
destroyData()
} else {
importData()
}
