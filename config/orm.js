const connection = require("../config/connection.js");

// Used to add the correct amount of question marks to the insertOne orm method mysql query
const getQuestionMarks = (values) => {
    qMarkArray = [];
    values.forEach(value => qMarkArray.push("?"));
    return qMarkArray.toString();
};

// Used to take in an object and convert it into a style that can be used for mysql query in the updateOne orm method
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
// variable containing method templates for querying database.  Will be called by models.
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