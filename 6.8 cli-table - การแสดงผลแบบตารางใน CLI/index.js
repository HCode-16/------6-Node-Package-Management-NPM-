const Table = require('cli-table3');

const table = new Table({
  head: ['a', 'b', 'c'],
});

const dataset = [
  ['a1', 'b1', 'c1'],
  ['a2', 'b2', 'c2'],
  ['a3', 'b3', 'c3'],
  ['a4', 'b4', 'c4'],
  ['a5', 'b5', 'c5'],
];

table.push(...dataset);

console.log(table.toString());
