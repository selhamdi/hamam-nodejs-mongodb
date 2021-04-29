const mongoose = require('mongoose');

const PlacesSchema = mongoose.Schema({
    date:{
        type:String,
        require:true
    },
   
    place_dispo :{
        type:Number,
        
    }
   
});

module.exports = mongoose.model('Places', PlacesSchema);