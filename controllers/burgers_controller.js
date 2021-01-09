const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

// a route that will display the homepage of the app when hit.
//Homepage is generated by sending all the data in the burgers table to the index.handlebars file
router.get("/",function(req,res){
    burger.selectAll(function(data){
        res.render("index",{burgers:data});
    });
});
// a route that will add a burger to the burgers table when hit.  
router.post("/api/burgers", function(req,res){
    burger.insertOne(["burger","devoured"],[req.body.burger,req.body.devoured],function(result){
        res.json({id: result.insertId});
    });
});
// a route that will update the devoured value of an existing burger in the burger table when hit.
// The burger to update is selected by passing in the burgers id
router.put("/api/burgers/:id", function(req,res){
    let condition = "id = " + req.params.id;
    burger.updateOne({devoured:req.body.devoured},condition,function(result){
        if(result.changedRows === 0){
            return res.status(404).end();
        }
        else{
            res.status(200).end();
        }
    });
});

module.exports = router;