const express = require('express')
const app = express()
const port = 3000
const hostname = 'localhost'
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql')
const connection = mysql.createConnection(config)

connection.query(`use nodedb`)
connection.query(`create table people (id int not null auto_increment, name varchar(255), primary key(id))`)
connection.query(`INSERT INTO people(name) values(concat('Nathan Reys => ',now()))`)

app.get('/', (req,res) => {
    connection.query('SELECT * FROM people', function(err, result){
        res.send('<h1>Full Cycle Rocks!</h1>' + 
            '<h2>Lista de pessoas cadastradas</h2>' 
            + JSON.stringify(result,null,'\t'))
    })
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})