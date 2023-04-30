const  { response } = require('express');
const {validationResult} = require('express-validator')


const validarProduccion = (req,res=response,next)=>{
    // const {status,orden,modelo,configuracion,numero_wu,num_ems,cliente,pais,switch1,version,tipo,num_adaptadores,} = req.body;
    //manejo de errores
    const errores = validationResult(req);
    if( !errores.isEmpty()){
        return res.status(400).json({
            ok:false,
            errores:errores.mapped()
        })
    }
    // console.log(errores);
    next();
}
module.exports={
    validarProduccion
}