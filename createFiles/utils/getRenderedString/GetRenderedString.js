const replaceString = require('replace-string');

const getRenderedString = ({str, map}) => Object.keys(map).reduce(
    (accum, key) => replaceString(accum, key, map[key]), str);

module.exports = getRenderedString;