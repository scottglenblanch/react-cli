const path = require('path');
const fs = require('fs');
const replaceString = require('replace-string');
const getRenderedString = require('../../utils/getRenderedString');

const getNameUpperCamel = name => `${name.charAt(0).toUpperCase()}${name.substring(1)}`;
const getNameLowerCamel = name => `${name.charAt(0).toLowerCase()}${name.substring(1)}`;

const getFileContent = name => getRenderedString({
  str: fs.readFileSync(path.join(__dirname,'./ContainerComponent.tmpl'), 'utf8'),
  map: {
    '%NameUpperCamel%': getNameUpperCamel(name),
    '%NameLowerCamel%': getNameLowerCamel(name),
  }
});

module.exports = getFileContent;