const getFileContent = require('./getFileContent');

const createContainerComponent = ({ dir, name }) => {
  fs.writeFileSync(`${dir}/${name}.jsx`, getFileContent(name));
};

module.exports = createContainerComponent;
