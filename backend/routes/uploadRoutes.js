// import { express } from "express";
// import path from "path";
// import multer from "multer";
const express = require("express");
const path = require("path");
const multer = require("multer");
const router = express.Router();

const storage = multer.diskStorage({
    destination(req, file, cb) {
    cb(null, 'uploads/')
    
    },
    filename ( req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname).toLowerCase()}`)
    }
})

function checkFileType(file, cb) {
    const filetypes = /jpg|jpeg|png/
    const extname= filetypes.test(path.extname(file.originalname).toLowerCase())
    const mimetype = filetypes.test(file.mimetype)

    if(mimetype && extname) {
        return cb(null, true)
    } else {
        cb('Error: Images Only!')
    }
}    

const uploads = multer({
    storage,
    fileFilter: function(req, file, cb){
        checkFileType(file, cb)
    }
})

router.post('/', uploads.single('FotoFileI'), (req, res) => {
    res.send(`/${req.file.path}`)
})

module.exports = router;