const Place = require('../models/Places');
module.exports = {
    async addplace (req,res) {
        const place = new Place({
           
            place_dispo: req.body.place_dispo,
            date: req.body.date,
            
        });
        try{
            const savePlace = await place.save();
            
            res.json(savePlace);
        }catch (err){
    res.json({message:err});
        }
    },
   
    async  getPlaces  (req,res){
        try{
            const places = await Place.find();
            res.status(200).json(places);
        }catch
            (err){
                res.json({message:err});
        }
    },
   
}