const express = require("express");
const cors = require("cors");
const multer = require('multer');
const {dbConnection} =require('./DB/config')
const mongoose = require("mongoose");
const bodyParser= require('body-parser')
const User     = require('./models/Usuarios');
const path = require('path');
// const products = require('./data/products');
const fileUpload =require('express-fileupload');
const ProductRoutes = require('./routes/productRoutes');
const uploadRoutes = require('./routes/uploadRoutes');


const app = express();
require('dotenv').config();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Reemplaza localhost:3000 con tu dominio de frontend
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


app.get("/api/config/paypal",(req,res)=>
  res.send(process.env.PAYPAL_CLIENT_ID)
)

///////////////////////
app.use(fileUpload ());
///////////////////////

//DB Conection carpeta DB
dbConnection();
app.options('*',cors());

/////////Productos//////////////
app.get('/', (req, res) => {
  res.send('API is running...')
})

//////// Read /////////


////////Autenticacion /////////
/////login,create,renew
app.use('/api/auth',require('./routes/auth'));
 
////////////////////////////////
////////Products Routes ///////
/////login,create,renew///////
/////////////////////////////
app.use('/api/products',ProductRoutes);

////////////////////////////////
//////// Upload  Routes ///////
//////////////////////////////
app.use('/api/upload',uploadRoutes);
app.use('/uploads',express.static('uploads'));
// app.use('/uploads',express.static(path.join(__dirname,'uploads')));

////////////////////////////////////////////////////////////////
// Upload Endpoint funciona
app.post('/upload2', (req, res)=>{
  if (req.files === null){
      return res.status(400).json({ msg: 'No file uploaded' });
   }
   const file=req.files.file;
   file.mv(`${__dirname}/uploads/${file.name}`, err =>{
    // ${__dirname}/../uploads/
      if (err){
        console.error(err);
        return res.status (500).send (err);
     }
      res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
   });
 });
////////////////////////////////////////////////////////////////

app.listen(process.env.PORT, () => {
    // console.log(`at http://localhost:${port}`)
    console.log(`at http://localhost:${process.env.PORT}`);
  })


  
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///diskstorage
// const storage = multer.diskStorage({
//     destination: './public/images/',
//     filename: function(req, file, cb){
//         cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//     }
// });

// var nameImg=[];
// const diskstorage = multer.diskStorage({
//   destination:path.join(__dirname,'./images'),
//   filename:(req,file,call)=>{
//     nuevoFile=Date.now()+'-'+file.originalname;
//     call(null,Date.now()+'-'+file.originalname)// 
//     nameImg="../images/" + Date.now() + '-' + file.originalname;
    
//     // nameImg='../images/'+'brand.png';
//     ;
//     // console.log(nameImg);
//   }
// })
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
