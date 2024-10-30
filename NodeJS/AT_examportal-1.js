const mysql = require('mysql2');

const connection = mysql.createConnection({
	host: '00000000',
	user: '0000',
	password: '0000000000',
	database: 'at_examportal'
});

connection.connect();

connection.query('SELECT * From student_examportal',(err, results, field) => {
  if (err) throw err;
  console.log(results[0]);
});

connection.end();
