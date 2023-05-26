let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Bncvznczvzz1411',
    database: 'dbTest',
    charset: 'utf8_general_ci'
});

connection.connect(err => {
    if (err) {
        throw err.stack;
    } else {
        console.log('connect success');
        let sql = "create table customer (id int not null primary key auto_increment, name varchar(30) not null, address varchar(30))";
        connection.query(sql, err => {
            if (err) {
                console.log(err);
            } else {
                console.log('Create table success');
                connection.end();
            }
        });
        return;
    }
});