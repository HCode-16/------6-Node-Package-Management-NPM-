const axios = require('axios').default;

const payload = { email: 'eve.holt@reqres.in', password: 'pistol' };

// การใช้งาน get
// axios
//   .get('https://reqres.in/api/users/2')
//   .then(console.log)
//   .catch(console.error);

// การใช้งาน post
// axios
//   .post('https://reqres.in/api/register', payload)
//   .then((res) => console.log(res.data))
//   .catch(console.error);

// การสร้าง instance
// const reqres = axios.create({
//   baseURL: 'https://reqres.in/api',
// });

// reqres
//   .get('/users', payload)
//   .then((res) => console.log(res.data))
//   .catch(console.error);

// reqres
//   .get('/users/2', payload)
//   .then((res) => console.log(res.data))
//   .catch(console.error);

// Work Chop
const { createWriteStream } = require('fs');
const ProgressBar = require('progress');

const { program } = require('commander');

program
  .name('downloader')
  .description('A downloader for any URL')
  .version('1.0.0')
  .requiredOption('-u,--url <url>', 'URL to download')
  .requiredOption('-o, --output <path>', 'Path to download')
  .action(async (opts) => {
    const writer = createWriteStream(opts.output);
    writer.on('finish', () => {
      console.log('Done!');
      process.exit(0);
    });
    try {
      console.log('Try to connect into', opts.url);
      const res = await axios.get(opts.url, {
        responseType: 'stream',
      });
      res.data.on('error', (err) => {
        throw err;
      });
      const fileSize = parseInt(res.headers['content-length'], 10);
      const bar = new ProgressBar(
        '  downloading [:bar] :rate/bps :percent :etas',
        {
          complete: '=',
          incomplete: ' ',
          width: 20,
          total: fileSize,
        }
      );
      res.data.on('data', (chunk) => {
        bar.tick(chunk.length);
      });
      res.data.pipe(writer);
    } catch (error) {
      console.error(error);
    }
  });

program.parse();
