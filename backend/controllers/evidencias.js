const multer = require('multer');

/////multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now( ))
    }
})

const upload = multer({ storage: storage })
exports.upload = upload.single('myFile')

exports.uploadFile =(req, res) =>{ 
    res.send({ data: 'Enviar un archivo' })
}