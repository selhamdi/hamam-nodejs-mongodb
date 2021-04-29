const Client = require('../models/Client');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

module.exports = {
    async addClient(req, res) {
        bcrypt.hash(req.body.password, 10, async (err, hash) => {
            if (hash) {
                const client = new Client({
                    prenom: req.body.prenom,
                    nom: req.body.nom,
                    cin: req.body.cin,
                    genre: req.body.genre,
                    phone: req.body.phone,
                    date_naissance: req.body.date_naissance,
                    password: hash,
                });
                try {
                    const saveClient = await client.save();
                    res.json(saveClient);
                } catch (err) {
                    res.json({ message: err });
                }
            }
        })


    },

    async signInclient(req, res) {

        const findClient = await Client.findOne({ phone: req.body.phone })
        if (findClient) {
            bcrypt.compare(req.body.password, findClient.password, (err, result) => {
                if (result) {
                    const token = jwt.sign({ _id: findClient._id }, 'theKey')
                    res.status(200).send({
                        client: findClient,
                        token: token
                    })
                } else {
                    res.status(401).send('email or password incorrect')
                }

            })

           
        } else {
            req.send('go to signup page')
        }



    },

}
