const _ = require("lodash");
const dotenv = require("dotenv");

dotenv.config();

const users = [
  { id: 1, username: "john" },
  { id: 2, username: "joe" },
  { id: 3, username: "jan" },
  { id: 4, username: "jame" },
  { id: 5, username: "jin" },
];

// const adminId = 3;

console.log(process.env);

console.log(_.find(users, { id: +process.env.ADMIN_ID }));
