const fs = require('fs');
const {promisify} = require('util');


const getDirectories = source =>
  fs.readdirSync(source, {withFileTypes: true})
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

const mkdir = promisify(fs.mkdir);

const directory = './www/all/';
const fileName = 'index.html';

async function main() {
  await mkdir(directory, {recursive: true});
  const stream = fs.createWriteStream(directory + fileName);

  stream.once('open', function (fd) {
    stream.write(`<ul>`);
    for (let dir of getDirectories('./src/app')) {
      stream.write(`  <li><a href="/${dir}">${dir}</a></li>`)
    }
    stream.write(`</ul>`);
    stream.end();
  });
}

main()

