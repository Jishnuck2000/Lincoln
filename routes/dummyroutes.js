const express = require("express")
const dummyroutes = express.Router()




const Dummy = require('../models/dummyschema');


dummyroutes.post('/add1', (req, res) => {
    const Data = new Dummy({
        name: req.body.name,
        age:req.body.age,
        phone_no: req.body.phone_no,
        address:req.body.address,
        pincode:req.body.pincode,
        email:req.body.email
       
    });

    Data.save()
        .then((data) => {
            res.send(data);
          
        })
        .catch((err) => console.log(err));
});


dummyroutes.get('/view1', (req, res) => {
    Dummy.find()
        .then((data) => {
           
            res.status(200).json({
                success: true,
                error: false,
                name: data, 
            });

        })
        .catch((err) => console.log(err));
});


dummyroutes.get('/view1/:id', (req, res) => {
    Dummy.findOne({
        _id: req.params.id,
    })
        .then((data) => {
            res.send(data);

            
        })
        .catch((err) =>
        res.status(400).json({
            success: false,
            error: true,
            message: err,
        }));
});


dummyroutes.put('/update1/:id', (req, res) => {
Dummy.findOne({
        _id: req.params.id,
    })
        .then((data) => {
            data.name = req.body.name,
            data.age = req.body.age,
            data.phone_no = req.body.phone_no,
            data.address=req.body.address,
            data.pincode=req.body.pincode,
            data.email=req.body.email
           

            data
                .save()
                .then((data) => {
                    res.status(200).json({
                        success: true,
                        error: false,
                        data: data,
                        message: 'updated successfully',
                    });
                })
                .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
});

dummyroutes.delete('/delete1/:id', (req, res) => {
    Dummy.deleteOne({
        _id: req.params.id,
    })
        .then(() => {
            res.status(200).json({
                success: true,
                error: false,
                message: 'Deleted successfully',
            });
        })
        .catch((err) => console.log(err));
});



module.exports = dummyroutes