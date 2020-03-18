const path = require('path');
const getFileContent = require('../utils/getFileContent');
const getStr = () => fs.readFileSync(path.join(__dirname, './ContainerComponent.tmpl'), 'utf8');
const getMap = name => ({
  '%NameUpperCamelCase%': name[0].toUpperCase + name.substring(1),
  '%NameLowerCamelCase%': name[0].toLowerCase + name.substring(1),
});
const getFilePath = ({dir, name}) =>`${dir}/${name}.jsx`;

const createContainerComponent = ({ dir, name }) =>
  fs.writeFileSync(
    getFilePath({dir, name}),
    getFileContent({ str: getStr(), map: getMap(name) })
  );


module.exports = createContainerComponent;
