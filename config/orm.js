const connection = require("../config/connection.js");

const getQuestionMarks = (values) => {
    qMarkArray = [];
    values.forEach(value => qMarkArray.push("?"));
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
        let queryString = "INSERT INTO " + table + "(" + columns.toString() + ") VALUES (" + getQuestionMarks(values) + ") ";
        connection.query(queryString, values, function (error, result) {
            if (error) throw error;
            cb(result);
        });
    },
    updateOne: function (table, objToUpdate, condition, cb) {
        let queryString = "UPDATE " + table + " SET ? WHERE ? ,[" + objToUpdate +","+ condition + "]";
        connection.query(queryString, function (error, result) {
            if (error) throw error;
            cb(result);
        });
    }
};

module.exports = orm;