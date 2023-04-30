/////informacion de la tabla/////
db.produccions.find({});
db.calidads.find({});
db.pruebas.find({});
db.tecnicaltests.find({});
db.estatus.find({});
db.estadofinals.find({});

///borra un elemento/////
// db.pruebas.deleteOne({"_id":ObjectId("621d30e18da9afb448c57e27")})
/////////
////toda la tabla////
db.produccions.remove({});
db.calidads.remove({});
db.pruebas.remove({});
db.tecnicaltests.remove({});
db.estadofinals.remove({});
