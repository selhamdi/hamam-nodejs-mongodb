const mongoose = require('mongoose');

const ReservationSchema = mongoose.Schema({
    date:{
        type:String,
        require:true
    },
    heure:{
        type:String,
        require:true 
    },
    N_place :{
        type:Number,
        minlength:60,
        maxlength: 60
    },
    client_id:{
        type :mongoose.Schema.Types.ObjectId,
        ref : 'Client'
    },
});

module.exports = mongoose.model('Reservation', ReservationSchema);