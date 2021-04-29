const mongoose = require('mongoose')

const hamamSchema = mongoose.Schema({
    name:{
        type:String
    },
    Nbr:{
        type:Number,
        default:0
    }
})

module.exports = mongoose.model('Hamam', hamamSchema);