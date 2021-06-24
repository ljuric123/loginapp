const model = require("../model/model");

exports.deleteUser = function(req, res) {
    
    //
    //delete by id???
    //

    model.deleteOne({email: req.body.email}, (err, user) => {
        if (err)
        // send error
            res.send(err);
            console.log("error");
        // user json
        res.json({message: "User successfully deleted"});
    })
};
