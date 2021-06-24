const express = require("express");

const createuser = require("../controllers/signUp");
const deleteuser = require("../controllers/deleteUser");
const updateuser = require("../controllers/updateUser");
const listall = require("../controllers/listAll")
const authenticate = require("../controllers/authenitcate")




const router = express.Router();

router.get("/admin/all", listall.listAll);

router.post("/signup", createuser.signUp);

router.post("/user/delete", deleteuser.deleteUser);

router.post("/user/update", updateuser.updateUser);

router.post("/authenticate", authenticate.authenticate);



module.exports = router;