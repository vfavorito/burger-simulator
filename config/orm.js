const connection = require("../config/connection.js");

const getQuestionMarks = (values) => {
    qMarkArray = [];
    values.forEach( value => qMarkArray.push("?"));
    return qMarkArray.toString();
};

const orm = {
    selectAll: function (table, cb) {
        let queryString = "SELECT * FROM " + table;
        connection.query(queryString, function (error, result) {
            if (error) throw error;
            cb(result);
        });
    },
    insertOne: function (table, columns, values, cb) {
        let queryString = "INSERT INTO " + table + "(" + columns + ") VALUES(" + getQuestionMarks(values) + ")";
            connection.query(queryString, function (error, result) {
                if (error) throw error;
                cb(result);
            });
},

};

module.exports = orm;