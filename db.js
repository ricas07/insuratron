// WIP
const Client = require('pg').Client;

const client = new Client({
    user: 'rperez',
    host: 'localhost',
    database: 'mydb',
    password: '!6Uaw19nf',
    port: 3211,
  });
client.connect();
console.log(client);
client.query('SELECT * from users', ['Hello World'], (err, res) => {
    console.log(err ? err.stack : res.rows[0].message) // Hello World
    client.end();
})
.catch(err => console.log(err));