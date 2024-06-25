#!/usr/bin/env node

const { program } = require('commander');

program
  .name('simple-calc')
  .description('A simple calculator for you')
  .version('1.0.0');

// function addCommand(name, operater) {
//   program
//     .command(`${name} <x> <y>`)
//     .option('-f, --float <number>')
//     //   .requiredOption('<x>, --var-x <num>')
//     //   .requiredOption('<y>, --var-y <num>')
//     .action((x, y, opts) => {
//       x = +x;
//       y = +y;
//       if (Number.isNaN(x) || Number.isNaN(y)) {
//         throw new Error('some args is NaN');
//       }
//       let ans;
//       switch (operater) {
//         case '+':
//           ans = x + y;
//           break;

//         case '-':
//           ans = x - y;
//           break;

//         case '*':
//           ans = x * y;
//           break;

//         case '/':
//           ans = x / y;
//           break;
//         default:
//           break;
//       }
//       if (opts.float) {
//         ans = ans.toFixed(opts.float);
//       }
//       console.log(`Answer is ${ans}`);
//     });
// }

function addCommand(name, operater) {
  program
    .command(name)
    .argument('<x>', 'x number')
    .argument('<y>', 'y number')
    .option('-f, --float <number>')
    //   .requiredOption('<x>, --var-x <num>')
    //   .requiredOption('<y>, --var-y <num>')
    .action((x, y, opts) => {
      x = +x;
      y = +y;
      if (Number.isNaN(x) || Number.isNaN(y)) {
        throw new Error('some args is NaN');
      }
      let ans;
      switch (operater) {
        case '+':
          ans = x + y;
          break;

        case '-':
          ans = x - y;
          break;

        case '*':
          ans = x * y;
          break;

        case '/':
          ans = x / y;
          break;
        default:
          break;
      }
      if (opts.float) {
        ans = ans.toFixed(opts.float);
      }
      console.log(`Answer is ${ans}`);
    });
}

addCommand('plus', '+');
addCommand('minus', '-');
addCommand('multiply', '*');
addCommand('divide', '/');

program.parse();

const options = program.opts();
// console.log(options);
