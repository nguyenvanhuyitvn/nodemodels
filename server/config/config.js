// 'use strict';
// const sequelize = require('sequelize')

// const db = new sequelize({
//     database: process.env.DB_NAME || "bookstore",
//     username: process.env.DB_USER || "postgres",
//     password: process.env.DB_PASS || "admin",
//     host: process.env.DB_HOST || "localhost",
//     port: process.env.DB_PORT || 5432,
//     dialect: 'postgres',
//     define: {
//         freezeTableName: true // định nghĩa bảng table có tên giống tên định nghĩa. Nếu không có thì trong database sẽ tự động thêm "s" vào table
//     }
// });
// const Op = sequelize.Op;
// db.authenticate()
//     .then(() => console.log('Kết nối thành công'))
//     .catch(err => console.log(err.message))
// module.exports = {
//     db,
//     Op
// }

// read json
const fs = require('fs');
var str = "develop_dhy_reduce_2019_10_06_21_12";
var a = str.slice(19, 29);
var a = a.split('_');
var date = new Date(a[0], a[1], a[2]);

var now = new Date();
//document.getElementById("demo").innerHTML = now;
var x = 1;
var y = 2;
if (x == y) {
    fs.readFile(__dirname + '/../config/config.json', function(err, content) {
        if (err) throw err;
        var parseJson = JSON.parse(content);
        parseJson.development.database = "bookstore";
        fs.writeFile(__dirname + '/../config/config.json', JSON.stringify(parseJson), function(err) {
            if (err) throw err;
        })
    })
} else {
    console.log("ok")
}