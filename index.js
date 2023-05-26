let http = require('http');
let url = require('url');
let qs = require('qs');
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
    }
});

let server = http.createServer(async (req, res) => {
    try {
        if (req.url === '/user' && req.method === 'POST') {
            let buffers = [];
            for await (let chunk of req) {
                buffers.push(chunk);
            }
            let data = Buffer.concat(buffers).toString();
            let userData = JSON.parse(data);
            let sql = `insert into customer(name, address) values('${userData.name}', '${userData.address}');`;
            connection.query(sql, err => {
                if (err) throw err;
                res.end('Success');
            });
        }
    } catch (err) {
        return res.end(err.message);
    }
});

server.listen(8080, () => {
    console.log('server running at localhost:8080');
});