const bcrypt = require("bcryptjs");

const users = [
    {
        name: 'Aldo',
        email: 'aldo@gmail.com',
        pwd: bcrypt.hashSync('123456', 10),
        DiplomadoPermiso: false,
    },
]    
module.exports=users



