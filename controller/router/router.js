const express = require("express");
const connection = require('../../model/database.connect/connector');
const router = express.Router();
const { Endpoint } = require("../endpoint.js");

router.post("/customer", new Endpoint().customerEndpoint);
router.post("/chiropractor", new Endpoint().chiropractorEndpoint);

router.get("/showchiropractor", function(req, res) {
    
    connection.query('SELECT * FROM chiropractor', (err, rows) => {
   
        if(!err){ 
            
            obj = { chiropractor : rows, Error : err}
            res.render('index1', obj)
          
        } else {
            console.log(err)
        }
    })
});

router.get("/show1", function(req, res) {
    
    connection.query('SELECT * FROM customer  ', (err, rows) => {
   
        if(!err){ 
            
            obj = { customer : rows, Error : err}
            res.render('1', obj)
          
        } else {
            console.log(err)
        }
    })
});

router.get('/delete', (req, res) => {
         
    connection.query('DELETE FROM customer WHERE customer_id > 0 ', (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log("delete All finish")
            res.redirect('/');

        }
    })
})

router.get("/", function(req, res) {
    
    connection.query('SELECT * FROM customer', (err, rows) => {
       
        if(!err){ 
            
            obj = { customer : rows, Error : err}
            res.render('homepage', obj)
              
        } else {
            console.log(err)
        }
    })
});


router.get('/delete/(:id)', (req, res, next) => {
    let id = req.params.id;
    
    connection.query('DELETE FROM customer WHERE Customer_id = ' + id, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log("delete finish")
            res.redirect('/');

        }
    })
})

//
module.exports = router;