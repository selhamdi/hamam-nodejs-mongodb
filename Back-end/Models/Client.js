const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({
    prenom:{
        type:String,
        
    },
    nom:{
        type:String,
        
    },
    cin:{
        type:String,
        
    },
    date_naissance:{
        type:Date,
        
    },
    
    genre:{
        type:String,
        
    },
    phone:{
        type:String,
        
    },
    password:{
        type:String,
    },
});

module.exports = mongoose.model('Client', ClientSchema);