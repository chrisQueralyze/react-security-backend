let user, host, database, password;

if (process.env.MODE === 'production') {
  user = 'gmjndvsdglgvmb';
  host = 'ec2-54-227-240-7.compute-1.amazonaws.com';
  database = 'd6k1oq1ia248qd';
  password = '4f6b808e42e2b3b2fa616b6d5659e603b0cf5f3ce27ef0c067eed9653cd6f257';
  password = process.env.DB_PASSWORD;
} else {
  user = 'node_user';
  host = 'localhost';
  database = 'usersdb';
  password = 'node_password';
};

module.exports = { user, host, database, password, port: 5432 };
