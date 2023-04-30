const express = require('express');
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');
const Usuarios = require('../models/Usuarios');
const { generateJWT } = require('../helpers/jwt');

const CrearUsuario = async(req,res= express.response)=>{
    // console.log(req.body)
    const {email,pwd} = req.body;

    try{
    
    let usuario = await Usuarios.findOne({email})
    console.log(usuario);
    // console.log(pwd)

        if(usuario){
            return res.status(400).json({
                ok:false,
                uid:usuario.id,
                msg:'este correo ya existe'
            })
        }
    usuario = new Usuarios(req.body);

    ///encriptando password
    const salt  = bcrypt.genSaltSync(10);//10 por defecto
    usuario.pwd = bcrypt.hashSync(pwd , salt);

    // console.log("password")
    // console.log(usuario.pwd,bcrypt.hashSync(pwd , salt));

    await usuario.save();

    const token = await generateJWT(usuario.id,usuario.name)

    res.status(201).json({
        ok:true,
        msg:'register success',
        pass: pwd,
        uid:usuario.id,
        name:usuario.name,
        token:token

    })
    }catch (error){
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'por favor notifica al admin Aldo Sanchez Leon',
        })
    }
}


const LoginUsuario  = async(req,res = express.response)=>{
    const {email,pwd} = req.body;
    console.log(pwd)

    try {
    let usuario = await Usuarios.findOne({email})
        if(!usuario){
            return res.status(400).json({
                ok:false,
                msg:'este correo no existe'
                // el usuaruo o contraseña son incorrectos
            })
        }
        const validatePassword = bcrypt.compareSync(pwd,usuario.pwd);
        if (!validatePassword){
            return res.status(400).json({
                ok:false,
                msg:'Password incorrecto'
            });
        }
        //Generate JWT
        const token = await generateJWT(usuario.id,usuario.name)
        res.status(201).json({
            ok:true,
            uid:usuario.id,
            name:usuario.name
        });

    } catch (error) {
        console.log(error)
    }

}

const RevalidarUsuario  = async(req,res= express.response)=>{
    // const {email,pwd} = req.body;
    const { uid ,name } = req;
    //generar un nuevo JWT
    const token = await generateJWT(uid,name);

    res.json({
        ok:true,
        token
        // uid:req.uid,
        // name:req.name,
    })
}

const UpdateUsuario  = async(req,res= express.response)=>{
    const {id,isAdmin,isIngAmbiental,isCoordinadorActivos} = req.body;
    try{
        const usuario = await Usuarios.findByIdAndUpdate(id,{isAdmin,isIngAmbiental,isCoordinadorActivos},{new:true});
        res.json({
            ok:true,
            msg:'update',
            usuario
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'por favor notifica al admin Aldo Sanchez Leon',
        })
    }
    // try{
    
    // let usuarioUpdate = await Usuarios.updateOne({_id:id},{$set:{isAdmin,isIngAmbiental,isCoordinadorActivos}});
    // console.log(usuarioUpdate);
    // // await usuarioUpdate.save();
    // res.status(201).json({
    //     ok:true,
    //     msg:'update',
    // })
    // }catch (error){
    //     console.log(error);
    //     res.status(500).json({
    //         ok:false,
    //         msg:'por favor notifica al admin Aldo Sanchez Leon',
    //     })
    // }
}


module.exports ={
    CrearUsuario,RevalidarUsuario,LoginUsuario,UpdateUsuario
}