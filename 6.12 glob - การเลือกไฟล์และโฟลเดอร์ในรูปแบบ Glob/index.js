const { glob, globSync, globStream, globStreamSync, Glob } = require('glob');
// const glob = require('glob');
const { promisify } = require('util');

// const globAsync = (pattern) =>
//   new Promise((resolve, reject) => {
//     glob.glob(pattern, (err, files) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(files);
//       }
//     });
//   });

// globAsync('*.json').then(console.log).catch(console.error);

async function readFiles() {
  const files = await glob('*.json');
  console.log(files);
}

readFiles().catch(console.error);
