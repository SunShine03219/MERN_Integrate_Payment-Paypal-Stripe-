const  { response } = require('express');
const jwt = require('jsonwebtoken');
// const { collection } = require('../models/Usuarios');

const validarJWT = (req,res=response,next) => {


    //x-token Headers
    const token = req.header('x-token');
    // console.log(token)

    if(!token){
        return res.status(401).json({
            ok:false,
            msg:'No hay token en la peticion'
        })
    }

    
    try {
        const payload = jwt.verify(
            token,
            process.env.SECRET_JWT
        );
        req.uid = payload.uid;
        req.name = payload.name;
        
        console.log(payload)
    } catch (error) {
        
        return res.status(401).json({
            ok:false,
            msg:'Token no valido'
        })
    }

    next();
}

module.exports={
    validarJWT
}
