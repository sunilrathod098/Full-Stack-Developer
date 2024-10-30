const mysql = require('mysql2');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'sunil@2002',
	database: 'at_examportal'
});

connection.connect();

connection.query('SELECT * From student_examportal',(err, results, field) => {
  if (err) throw err;
  console.log(results[0]);
});

connection.end();