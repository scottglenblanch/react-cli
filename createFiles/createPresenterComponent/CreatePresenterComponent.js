const path = require('path');
const fs = require('fs');
const getFileContent = require('../utils/getFileContent');



const getComponentFilePath = ({dir, name}) =>`${dir}/${name}.jsx`;
const getComponentStr = () => fs.readFileSync(path.join(__dirname, './PresenterComponent.tmpl'), 'utf8');
const getComponentMap = name => ({
  '%NameUpperCamelCase%': `${name[0].toUpperCase()}${name.substring(1)}`
});

const getIndexFilePath = ({dir}) => `${dir}/index.js`;
const getIndexStr = () => fs.readFileSync(path.join(__dirname, './index.tmpl'), 'utf8');
const getIndexMap = name => ({
  '%NameUpperCamelCase%': `${name[0].toUpperCase()}${name.substring(1)}`,
  '%NameLowerCamelCase%': `${name[0].toLowerCase()}${name.substring(1)}`,
})

const createComponentFile = ({dir, name}) => fs.writeFileSync(
  getComponentFilePath({dir, name}),
  getFileContent({ str: getComponentStr(), map: getComponentMap(name) })
);

const createIndexFile = ({dir, name}) => fs.writeFileSync(
  getIndexFilePath({dir}),
  getFileContent({str: getIndexStr(), map: getIndexMap(name)})
);

module.exports = ({dir, name}) => {
  createComponentFile({dir, name});
  createIndexFile({dir, name});
};