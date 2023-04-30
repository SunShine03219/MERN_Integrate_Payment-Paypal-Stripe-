const express = require('express');
const Calidads = require('../models/Calidad');
const Produccions = require('../models/Produccion');
const Pruebas = require('../models/Prueba');
const TecnicalTests = require('../models/TecnicalTest');
const EstadoFinals = require('../models/Estatus');
const Form = require('../models/Form');
const Usuarios = require('../models/Usuarios');

const getAllProducts = async (req, res) => {
    try {
        const produccion = await Produccions.find();
        res.json(produccion);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
const getProductById = async (req, res) => {
    try {
        const produccion = await Produccions.find({
            where: {
                id: req.params.id
            }
        });
        res.json(produccion[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}//no esta habilitado
const deleteProduct = async (req, res) => {
    try {
        await Produccions.remove({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Production Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}//no esta habilitado

///////Calidad
const getAllForms = async (req, res) => {
    try {
        const calidad = await Calidads.find();
        res.json(calidad);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
const readProduccion = async(req,res= express.response)=>{ 
    try {
        const produccion = Produccions.find()
        res.json(produccion);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
const readPruebas = async(req,res= express.response)=>{ 
    try {
        const calidad = await Pruebas.find();
        res.json(calidad);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

const readEvidencias = async(req,res= express.response)=>{ 
    try {
        const evidencias = Evidencias.find()
        res.json(evidencias);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
const readTT = async(req,res= express.response)=>{ 
    try {
        const tt = await TecnicalTests.find();
        res.json(tt);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
///////////////////////
const readEstatus = async(req,res= express.response)=>{ 
    try {
        const estatus = await EstadoFinals.find();
        res.json(estatus);
    } catch (error) {
        res.json({ message: error.message });
    }  
}


const getUserPuesto = async (req, res) => {
    try {
        const puesto = await Usuarios.find();
        res.json(puesto);
    } catch (error) {
        res.json({ message: error.message });
    }  
}




module.exports ={
    readProduccion,
    getAllProducts,getProductById,deleteProduct,
    getAllForms,//calidad
    readPruebas,//pruebas
    readEvidencias,//evidencias
    readTT,//tecnical test
    readEstatus,/////estatus

    getUserPuesto,
    // createPruebas,createCalidad,createTecnicalTest,createEvidencias,createEstatus
}
