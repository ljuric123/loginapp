
var mongoose = require("mongoose");

var model = require("./dbmodel");

var schema = mongoose.Schema;
var modelSchema = new schema(model, {timestamps: true});


module.exports = mongoose.model("auth", modelSchema, "authcoll");