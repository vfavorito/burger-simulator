const connection = require("../config/connection.js");

const getQuestionMarks = (values) => {
    qMarkArray = [];
    values.forEach(value => qMarkArray.push("?"));
    return qMarkArray.toString();
};

const objToSql = (obj) => {
    let arr = [];
    for (let key in obj) {
        let value = obj[key];
        if (Object.hasOwnProperty.call(obj, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            };
            arr.push(key + "=" + value);
        };
    };
    return arr.toString();
}

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
        let queryString = "UPDATE " + table + " SET " + objToSql(objToUpdate) + " WHERE " + condition;
        connection.query(queryString, function (error, result) {
            if (error) throw error;
            cb(result);
        });
    }
};

module.exports = orm;