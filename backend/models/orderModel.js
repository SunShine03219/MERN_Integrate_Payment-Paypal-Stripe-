const{Schema,model} = require("mongoose");

const orderSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    orderItems: [
    {
        name: { type: String, required: true },
        video: { type: String, required: true },
        price: { type: Number, required: true },
    }
    ],
    takeItAt: {
    type: Date,
    },

},{timestamps:true});


module.exports= model('Order',orderSchema)