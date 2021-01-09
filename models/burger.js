const orm = require("../config/orm.js");

// a variable containing methods that will use the orm methods and passes in the burgers parameter.
// These methods are called in the controller
const burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insertOne: function (columns, values, cb) {
        orm.insertOne("burgers", columns, values, function (res) {
            cb(res);
        });
    },
    updateOne: function(objToUpdate,condition,cb){
        orm.updateOne("burgers", objToUpdate,condition,function(res){
            cb(res);
        });
    }
};

module.exports = burger;