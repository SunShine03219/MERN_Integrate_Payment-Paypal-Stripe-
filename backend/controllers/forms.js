const express = require('express');
const Calidads = require('../models/Calidad');
const Produccions = require('../models/Produccion');
const Pruebas = require('../models/Prueba');
const TecnicalTests = require('../models/TecnicalTest');
const EstadoFinals = require('../models/Estatus');
const Form = require('../models/Form');

//Produccion
const createProduccion = async(req,res= express.response)=>{
    // console.log(req.body);
    // const {status,orden,modelo,configuracion,numero_wu,num_ems,cliente,pais,switch1,switch2,version,tipo,num_adaptadores,num_adaptadores2,comentConfig,comentarios,asignar_ing_pruebas} = req.body;
    const produccion = new Produccions(req.body);
    await produccion.save();

    res.status(201).json({
        ok:true,
        msg:'produccion'
        // ,status
        // ,orden
        // ,modelo
        // ,configuracion
        // ,numero_wu
        // ,num_ems
        // ,cliente
        // ,pais
        // ,switch1
        // ,switch2
        // ,version
        // ,tipo
        // ,num_adaptadores
        // ,num_adaptadores2
        // ,comentConfig
        // ,comentarios
        // ,asignar_ing_pruebas
    })
    

}
const UpdateProduccion = async(req,res= express.response)=>{
    
    console.log(req.body);
    const {id_producion,status,orden,modelo,configuracion,numero_wu,num_ems,cliente,pais,switch1,switch2,version,tipo,num_adaptadores,num_adaptadores2,comentConfig,comentarios,asig_ing} = req.body;
    try{
        await Produccions.updateMany({_id:id_producion},{status:status,orden:orden,modelo:modelo,configuracion:configuracion,numero_wu:numero_wu,num_ems:num_ems,cliente:cliente,pais:pais,switch1:switch1,switch2:switch2,version:version,tipo:tipo,num_adaptadores:num_adaptadores,num_adaptadores2:num_adaptadores2,comentConfig:comentConfig,comentarios:comentarios,asig_ing:asig_ing})
        // await usuarioUpdate.save();
        res.status(201).json({
            ok:true,
            msg:'update produccion',
            id_producion
            ,status
            ,orden
            ,modelo
            ,configuracion
            ,numero_wu
            ,num_ems
            ,cliente
            ,pais
            ,switch1
            ,switch2
            ,version
            ,tipo
            ,num_adaptadores
            ,num_adaptadores2
            ,comentConfig
            ,comentarios
            ,asig_ing
            ,ETTC
        })
        }catch (error){
            console.log(error);
            res.status(500).json({
                ok:false,
                msg:'por favor notifica al admin Aldo Sanchez Leon',
            })
        }
   

}
//Calidad
const createCalidad =(req,res= express.response)=>{
    // const {incoming,r_incoming,num_hdd,num_ssd,validacion_vpd,auditado_en,ems1,ems2,essio1,essio2,essio3,essio4,essio5,essio6,prt1,prt2,prt3,prt4,prt5,prt6,prt7,ptr8,comentario_calidad,otros_essio,detalles_hold,solucion_hold,outgoing,r_outgoing } = req.body;
    const calidad = new Calidads(req.body);
    calidad.save();
    res.status(201).json({
        ok:true,
        msg:'calidad'
        // ,incoming
        // ,r_incoming
        // ,num_hdd
        // ,num_ssd
        // ,validacion_vpd
        // ,auditado_en
        // ,ems1
        // ,ems2
        // ,essio1
        // ,essio2
        // ,essio3
        // ,essio4
        // ,essio5
        // ,essio6
        // ,prt1
        // ,prt2
        // ,prt3
        // ,prt4
        // ,prt5
        // ,prt6
        // ,prt7
        // ,ptr8
        // ,comentario_calidad
        // ,otros_essio
        // ,detalles_hold
        // ,solucion_hold
        // ,outgoing
        // ,r_outgoing
    })
}
const UpdateCalidad = async(req,res= express.response)=>{
    
    console.log(req.body);
    const {id_calidad,incoming,r_incoming,num_hdd,num_ssd,validacion_vpd,auditado_en,ems1,ems2,essio1,essio2,essio3,essio4,essio5,essio6,prt1,prt2,prt3,prt4,prt5,prt6,prt7,prt8,comentario_calidad,otros_essio,detalles_hold,solucion_hold,outgoing,r_outgoing } = req.body;
    try{
        await Calidads.updateMany({_id:id_calidad},{incoming:incoming,r_incoming:r_incoming,num_hdd:num_hdd,num_ssd:num_ssd,validacion_vpd:validacion_vpd,auditado_en:auditado_en,ems1:ems1,ems2:ems2,essio1:essio1,essio2:essio2,essio3:essio3,essio4:essio4,essio5:essio5,essio6:essio6,prt1:prt1,prt2:prt2,prt3:prt3,prt4:prt4,prt5:prt5,prt6:prt6,prt7:prt7,prt8:prt8,comentario_calidad:comentario_calidad,otros_essio:otros_essio,detalles_hold:detalles_hold,solucion_hold:solucion_hold,outgoing:outgoing,r_outgoing:r_incoming})
        // await usuarioUpdate.save();
        res.status(201).json({
            ok:true,
            msg:'update produccion',
            incoming,
            r_incoming,
            num_ssd,
            validacion_vpd,
            auditado_en,
            ems1,
            ems2,
            essio1,
            essio2,
            essio3,
            essio4,
            essio5,
            essio6,
            prt1,
            prt2,
            prt3,
            prt4,
            prt5,
            prt6,
            prt7,
            prt8,
            comentario_calidad,
            otros_essio,
            detalles_hold,
            solucion_hold,
            outgoing,
            r_outgoing,
        })
        }catch (error){
            console.log(error);
            res.status(500).json({
                ok:false,
                msg:'por favor notifica al admin Aldo Sanchez Leon',
            })
        }
        

}

const createPruebas = (req,res = express.response )=>{ //res = express.response
    // const {evidencias_3k,evidencias_3k2,evidencias_5k,evidencias_Tuleta,evidencias_Switch,te_tt1_t1,te_tt2_t2,te_tt3_t3,gems_cems,vpd_seagates,comentarioT} =req.body;
    const pruebas = new Pruebas(req.body);
    pruebas.save();
    res.status(201).json({
        ok:true,
        msg:'pruebas'
        // ,evidencias_3k
        // ,evidencias_3k2
        // ,evidencias_5k
        // ,evidencias_Tuleta
        // ,evidencias_Switch
        // ,te_tt1_t1
        // ,te_tt2_t2
        // ,te_tt3_t3
        // ,gems_cems
        // ,vpd_seagates
        // ,comentarioT
        // ,detalles_hold
        // ,solucion_hold

    })
}
const UpdatePruebas = async(req,res= express.response)=>{
    
    console.log(req.body);
    const {id_pruebas,te_tt_t1,te_tt_t2,te_tt_t3,gems_cems,vpd_seagates,comentarioT,detalles_hold,solucion_hold,evidencias} = req.body;
    try{
        await Pruebas.updateMany({_id:id_pruebas},{te_tt_t1:te_tt_t1,te_tt_t2:te_tt_t2,te_tt_t3:te_tt_t3,gems_cems:gems_cems,vpd_seagates:vpd_seagates,comentarioT:comentarioT,detalles_hold:detalles_hold,solucion_hold:solucion_hold,evidencias:evidencias})
        // await usuarioUpdate.save();
        res.status(201).json({
            ok:true,
            msg:'update produccion',
            te_tt_t1,
            te_tt_t2,
            te_tt_t3,
            gems_cems,
            vpd_seagates,
            comentarioT,
            detalles_hold,
            solucion_hold,
            evidencias
        })
        }catch (error){
            console.log(error);
            res.status(500).json({
                ok:false,
                msg:'por favor notifica al admin Aldo Sanchez Leon',
            })
        }
        

}

const createTecnicalTest = (req,res = express.response )=>{ //res = express.response
    const tecnicalTest = new TecnicalTests(req.body);
    tecnicalTest.save();
    res.status(201).json({
        ok:true,
        msg:'TecnicalTest'
        // ,bahia
        // ,conecto
        // ,desconecto  
        // ,comentarioTT    
    })
}
const UpdateTecnicalTest = async(req,res= express.response)=>{
    
    console.log(req.body);
    const {id_tt,bahia,how_conect,how_disconect,coment_TT} = req.body;
    try{
        await TecnicalTests.updateMany({_id:id_tt},{bahia:bahia,how_conect:how_conect,how_disconect:how_disconect,coment_TT:coment_TT})
        // await usuarioUpdate.save();
        res.status(201).json({
            ok:true,
            msg:'update produccion',
            bahia:bahia,
            how_conect:how_conect,
            how_disconect:how_disconect,
            coment_TT:coment_TT
        })
        }catch (error){
            console.log(error);
            res.status(500).json({
                ok:false,
                msg:'por favor notifica al admin Aldo Sanchez Leon',
            })
        }
}

const createTodo= (req,res = express.response )=>{ //res = express.response
    const produccion = new Produccions(req.body);
    const calidad = new Calidad(req.body);
    const pruebas = new Pruebas(req.body);
    const tecnicalTest = new TecnicalTest(req.body);
    // const todo=[];
    // produccion.forEach(function() {
    //     todo.push(produccion,calidad,pruebas,tecnicalTest)
    // });
    const todo = new Todo(produccion,calidad,pruebas,tecnicalTest);
    todo.save();

    // tecnicalTest.save();
    res.status(201).json({
        ok:true,
        msg:'todo en una collection'
    })
}


const createEvidencias = (req,res = express.response )=>{ //res = express.response
    res.status(201).json({
        ok:true,
        msg:'evidenicas',      
    })
}


const createEstatus = (req,res = express.response )=>{ //res = express.response
    const estatus = new EstadoFinals(req.body);
    estatus.save();
    res.status(201).json({
        ok:true,
        msg:'estatus',      
    })
}
const UpdateEstatus = async(req,res= express.response)=>{    
    console.log(req.body);
    const {id_estatus,entrada,salida,tiempo_total} = req.body;
    try{
        await EstadoFinals.updateMany({_id:id_estatus},{entrada:entrada,salida:salida,tiempo_total:tiempo_total})
        // await usuarioUpdate.save();
        res.status(201).json({
            ok:true,
            msg:'update estatus',
            id_estatus,
            entrada,
            salida,
            tiempo_total
        })
        }catch (error){
            console.log(error);
            res.status(500).json({
                ok:false,
                msg:'por favor notifica al admin Aldo Sanchez Leon',
            })
        }
}

const Upload3k = async(req,res= express.response)=>{    
    console.log(req.body);
    
}



const borrarOne = async (req,res = express.response )=>{ //res = express.response
    console.log(req.body);
    const {id_producion,id_calidad,id_pruebas,id_tt} = req.body;
    try{
        // deleteOne({"_id":ObjectId("621d30e18da9afb448c57e27")})
        
        await Produccions.deleteOne({_id:id_producion})
        await Calidads.deleteOne({_id:id_calidad})
        await Pruebas.deleteOne({_id:id_pruebas})
        await TecnicalTests.deleteOne({_id:id_tt})
        res.status(201).json({
            ok:true,
            msg:'orden borrada',
        })
        }catch (error){
            console.log(error);
            res.status(500).json({
                ok:false,
                msg:'por favor notifica al admin Aldo Sanchez Leon',
            })
        }
}

module.exports ={
    createProduccion,createCalidad,createPruebas,createTecnicalTest,createEvidencias,createEstatus,createTodo,
    UpdateProduccion,UpdateCalidad,UpdatePruebas,UpdateTecnicalTest,UpdateEstatus,
    Upload3k,
    borrarOne
}

