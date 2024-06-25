const _ = require("lodash");

const users = [
  { id: 1, username: "john" },
  { id: 2, username: "joe" },
  { id: 3, username: "jan" },
  { id: 4, username: "jame" },
  { id: 5, username: "jin" },
];

const adminId = 2;

console.log(_.find(users, { id: adminId }));
