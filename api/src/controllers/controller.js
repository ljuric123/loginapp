

//TODO: DELETE


var mongoose = require("mongoose");
const { json } = require("express");
var model = mongoose.model("Model");

// find all users
exports.listAll = function(req, res) {

    model.find({}, (err, user) => {
        if (err)
        // send error
            res.send(err)
            console.log(err);
        // user json
        res.json(user);
    })
};

// find specific user
exports.readUser = function(req, res) {

    model.findById(req.params.userId, (err, user) => {
        if (err)
        // send error
            res.send(err)
            console.log(err);
        // user json
        res.json(user);
    })
};

// create new user
exports.createUser = function(req, res) {

    var newUser = new model(req.body)
    newUser.save((err, user) => {
        if (err)
        // send error
            res.send(err)
            console.log(err);
        // user json
        res.json(user);
        res.json({message: "User successfully created "});
    })
};

// update specific user
exports.updateUser = function(req, res) {

    model.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true},(err, user) => {
        if (err)
        // send error
            res.send(err)
            console.log(err);
        // user json
        res.json(user);
        res.json({message: "User successfully updated "});
    })
};

exports.deleteUser = function(req, res) {

    model.remove({_id: req.params.userId}, (err, user) => {
        if (err)
        // send error
            res.send(err)
            console.log(err);
        // user json
        res.json({message: "User successfully deleted"});
    })
};