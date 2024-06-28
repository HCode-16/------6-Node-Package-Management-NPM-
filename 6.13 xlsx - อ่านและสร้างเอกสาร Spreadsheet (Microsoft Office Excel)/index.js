const axios = require('axios').default;
const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');

const dist = path.join(__dirname, './dist.csv');

// function getResponse({ data: countries }) {
//   const headers = ['country', 'cases', 'deaths', 'recovered'];
//   fs.writeFileSync(dist, headers.join(',') + '\n');
//   for (const country of countries) {
//     const row = [
//       country.country,
//       country.cases,
//       country.deaths,
//       country.recovered,
//     ];
//     fs.appendFileSync(dist, row.join(',') + '\n');
//   }

//   console.log('Done!!!');
// }

const getResponse = ({ data: contries }) => {
  //   const buffer = fs.readFileSync(dist);
  //   const workbook = xlsx.readFile(dist);
  //   const firstSheetName = workbook.SheetNames[0];
  //   const json = xlsx.utils.sheet_to_json(workbook.Sheets[firstSheetName]);
  //   console.log(json);

  const table = [['country', 'cases', 'deaths', 'recovered']];
  for (const country of contries) {
    table.push([
      country.country,
      country.cases,
      country.deaths,
      country.recovered,
    ]);
  }
  const workSheet = xlsx.utils.aoa_to_sheet(table);
  const workbook = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(workbook, workSheet, 'CoVid Data');
  xlsx.writeFile(workbook, dist);
  console.log('Done!!!');
};

axios
  .get('https://disease.sh/v3/covid-19/countries')
  .then(getResponse)
  .catch(console.error);

// const obj = { a: 1, b: { c: 2 } };
// const { a } = obj;
// let {
//   b: { c: d },
// } = obj;
// // Two variables are bound: `a` and `d`

// console.log(a);
// console.log(b);
