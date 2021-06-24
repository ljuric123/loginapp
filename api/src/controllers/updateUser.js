// search by mail - id?
const model = require("../model/model");
const bcrypt = require("bcrypt");

exports.updateUser = async (req, res) => {

        try {

          const { email, password } = req.body;
          let user = await model.findOne({ email });

          user.password = await bcrypt.hash(password, 10);
          await user.save();
        
          res.send("User has been updated.");
        
        } 
        catch (err) {
          console.log(err);
          res.status(500).send("Something went wrong");
        }
      };