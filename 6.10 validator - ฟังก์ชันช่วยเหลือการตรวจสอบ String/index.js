const validator = require('validator');

let str1 = 'ABCabc';
let str2 = 'ABCabc123';
let str3 = 'ภาษาไทย';
let str4 = 'admin@example.com';
let str5 = '{name: "john",age: 18}';
let str6 = '{"name": "john","age": 18}';

const data = [
  'john@example.com',
  'john@gmail.com',
  'john+1@gmail.com',
  'john+2@gmail.com',
  'john+3@gmail.com',
  'john+4@gmail.com',
];

console.log([
  validator.isAlpha(str1),
  validator.isAlphanumeric(str2),
  validator.isAlpha(str3),
  validator.isEmail(str4),
  validator.isJSON(str5),
  validator.isJSON(str6),
]);

data.forEach((item) => {
  console.log(validator.normalizeEmail(item));
});
