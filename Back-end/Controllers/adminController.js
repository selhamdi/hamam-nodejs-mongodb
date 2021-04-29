const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

//add admin
module.exports = {
    async addAdmin(req, res) {
        bcrypt.hash(req.body.password, 10, async (err, hash) => {
            if (hash) {
                const admin = new Admin({
                    phone: req.body.phone,
                    password: hash,
                });
                try {
                    const saveAdmin = await admin.save();
                    res.json(saveAdmin);
                } catch (err) {
                    res.json({ message: err });
                }
            }
        })


    },

    // async signInAdmin(req, res) {

    //     const findAdmin = await Admin.findOne({ email: req.body.email })
    //     if (findAdmin) {
    //         bcrypt.compare(req.body.password, findAdmin.password, (err, result) => {
    //             if (result) {
    //                 const token = jwt.sign({ _id: findAdmin._id }, 'theKey')
    //                 res.status(200).send({
    //                     admin: findAdmin,
    //                     token: token
    //                 })
    //             } else {
    //                 res.status(401).send('email or password incorrect')
    //             }

    //         })
    //     } else {
    //         req.send('go to signup page')
    //     }



    // },




    async signInAdmin(req, res) {

        const findClient = await Admin.findOne({ phone: req.body.phone })
        if (findClient) {
            bcrypt.compare(req.body.password, findClient.password, (err, result) => {
                if (result) {
                    const token = jwt.sign({ _id: findClient._id }, 'theKey')
                    res.status(200).send({
                        admin: findClient,
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
