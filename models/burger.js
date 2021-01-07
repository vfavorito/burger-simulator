const orm = require("../config/orm.js");

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