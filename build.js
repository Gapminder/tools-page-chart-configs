const fs = require('fs');
const path = require('path');
const rm = require('rimraf');

const filesPath = path.resolve(__dirname, 'src');
const outputFilesPath = path.resolve(__dirname, 'dist');

rm.sync(outputFilesPath);
fs.mkdirSync(outputFilesPath);

fs.readdirSync(filesPath).forEach((filename) => {
  const basename = path.parse(filename).name;

  const content = fs.readFileSync(path.resolve(filesPath, filename));
  const jsContent = `var ${basename} = ${content};`;

  fs.writeFileSync(path.resolve(outputFilesPath, filename), filename);
  fs.writeFileSync(path.resolve(outputFilesPath, basename + '.js'), jsContent);
});