//var jwt = require("jsonwebtoken");
const model = require("../model/model");
const bcrypt = require("bcrypt")

exports.authenticate = function(req, res) {

    model.findOne({email: req.body.email}, function(err, user) {
        if (!user) {
            res.json({
                type: false,
                data: "Incorrect email"
            });
        } else {
            if (bcrypt.compareSync(req.body.password, user.password)) {
               res.json({
                    type: true,
                    data: user,
                    //token: user.token
                }); 
            } else {
                res.json({
                    type: false,
                    data: "Incorrect password"
                });    
            }
        }
    });
};
