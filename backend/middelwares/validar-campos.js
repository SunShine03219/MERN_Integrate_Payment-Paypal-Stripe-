const  { response } = require('express');
const {validationResult} = require('express-validator')


const validarCampos = (req,res=response,next)=>{
    const {email,pwd} = req.body;
    //manejo de errores
    const errores = validationResult(req);


    if( !errores.isEmpty()){
        return res.status(400).json({
            ok:false,
            errores:errores.mapped()
        })
        
    }
    console.log(errores);
    next();
}
module.exports={
    validarCampos
}