let user, host, database, password;

if (process.env.MODE === 'production') {
  user = 'gphqoqpoyitcmo';
  host = 'ec2-54-83-33-213.compute-1.amazonaws.com';
  database = 'ddd8jp2cfmddtc';
  password = 'fd230e3a1cadfccb1cf6263b1d8bf959bdec7bdafa47404af46acdae65c42ae0';
  password = process.env.DB_PASSWORD;
} else {
  user = 'node_user';
  host = 'localhost';
  database = 'usersdb';
  password = 'node_password';
};

module.exports = { user, host, database, password, port: 5432 };
