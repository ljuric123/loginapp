const model = require("../model/model")

exports.listAll = function(req, res) {

    model.find({}, (err, user) => {
        if (err)
        // send error
            res.send(err);
            console.log(err);
        // user json
        res.json(user);
    });
};
