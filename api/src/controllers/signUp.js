const model = require("../model/model");
const bcrypt = require("bcrypt");

exports.signUp = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      let user = await model.findOne({ email });
      if (user) 
        return res.status(400).send("User already registered.");
  
      user = new model({ email, password });
      user.password = await bcrypt.hash(user.password, 10);
      await user.save();
  
      res.send("registered");

    } 
    catch (err) {
      console.log(err);
      res.status(500).send("Something went wrong");
    }
  };

  //exports.signUp = function(req, res) {
//
//    
//    var newUser = new model(req.body)
//    newUser.save((err, user) => {
//        if (err)
//        // send error
//            res.send(err);
//            console.log(err);
//        // confirmation
//        res.json({message:"User Created!"});
//    });
//};
