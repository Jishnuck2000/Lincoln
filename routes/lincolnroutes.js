const express = require("express")
const lincolnroutes = express.Router()




const Lincoln = require('../models/lincolnschema');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/upload/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });


lincolnroutes.post('/add',upload.single('image'), (req, res) => {
    const Data = new Lincoln({
        modelname: req.body.modelname,
        year:req.body.year,
        price: req.body.price,
        image: req.file.filename,
       
    });

    Data.save()
        .then((data) => {
            res.redirect('/api/lincoln/view')
            // res.send(data);
          
        })
        .catch((err) => console.log(err));
});


lincolnroutes.get('/view', (req, res) => {
    Lincoln.find()
        .then((data) => {
           
            // res.status(200).json({
            //     success: true,
            //     error: false,
            //     name: data, 
            // });
            res.render('vh',{detail:data})
            // res.send(data)

        })
        .catch((err) => console.log(err));
});


lincolnroutes.get('/view/:id', (req, res) => {
    Lincoln.findOne({
        _id: req.params.id,
    })
        .then((data) => {
            res.render('viewone',{data})
            // res.send(data);

            
        })
        .catch((err) =>
        res.status(400).json({
            success: false,
            error: true,
            message: err,
        }));
});


lincolnroutes.get('/edit/:id', (req, res) => {
    Lincoln.findOne({
        _id: req.params.id,
    })
        .then((data) => {
            res.render('update',{data})
            // res.send(data);

            
        })
        .catch((err) =>
        res.status(400).json({
            success: false,
            error: true,
            message: err,
        }));
});


lincolnroutes.post('/update/:id',upload.single('image'), (req, res) => {
Lincoln.findOne({
        _id: req.params.id,
    })
        .then((data) => {
            data.modelname = req.body.modelname,
            data.year = req.body.year,
            data.price = req.body.price,
            data.image = req.body.image,
            data.image = req.file.filename,


           

            data
                .save()
                .then((data) => {

                    // res.render('update',{data})
                    res.redirect('/api/lincoln/view')

                    // res.status(200).json({
                    //     success: true,
                    //     error: false,
                    //     data: data,
                    //     message: 'updated successfully',
                    // });
                })
                .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
});

lincolnroutes.get('/delete/:id', (req, res) => {
    Lincoln.deleteOne({
        _id: req.params.id,
    })
        .then(() => {
            res.redirect('/api/lincoln/view')
            // res.status(200).json({
            //     success: true,
            //     error: false,
            //     message: 'Deleted successfully',
            // });
        })
        .catch((err) => console.log(err));
});



module.exports = lincolnroutes