const connection = require("../config/connection.js");

const getQuestionMarks = (values) => {
    qMarkArray = [];
    values.forEach(value => qMarkArray.push("?"))
};

const orm = {
    selectAll: function (table, cb) {
        let queryString = "SELECT * FROM " + table;
        connection.query(queryString, function (error, result) {
            if (error) throw error;
            cb(result);
        });
    },
   
};

module.exports = orm;