const Reservation = require('../models/Reservation');
const Hamam = require('../models/Hamam');
const mongoose =require('mongoose')
module.exports = {
    async addreser (req,res) {
        const findHamam = await Hamam.findOne({_id:mongoose.Types.ObjectId("60818b35668e58d4f834e326")})
        const total =findHamam.Nbr+parseInt(req.body.N_place)
        console.log(total);
        if(total <= 60){

            const reservation = new Reservation({
                N_place:req.body.N_place,
                date:req.body.date,
                heure: req.body.heure,
                clientParent: req.params.idClient
            });
            
            try{
                const saveReservation = await reservation.save();
                const udpateHmamNbr=await Humam.updateOne({_id:mongoose.Types.ObjectId("60818b35668e58d4f834e326")},
                { $inc: { Nbr: req.body.N_place } }
                )
                
                res.json(saveReservation);
            }catch (err){
        res.json({message:err});
            }
        }else{
            res.status(401).send('la max est 60')
        }
    },
    CreatHamam(req,res){
        const hamam = new Hamam({
            name:req.body.name
        })
        hamam.save()
        .then(doc=>{
            res.status(200).send(doc)
        })
        .catch(err=>console.log(err))
    },


};

//get all reservation
exports.index = function (req, res) {
    Reservation.find( function (err, reservation) {
        if (err) return (err);
        res.send(reservation);
    })
};

// exports.reservation_delete = function (req, res) {
//     Reservation.findByIdAndRemove(req.params.id, function (err) {
//         if (err) return (err);
//         res.send('Deleted successfully!');
//     })
// };