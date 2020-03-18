const process = require('process');
const fs = require('fs');
const {
  createContainerComponent,
  createPresenterComponent
} = require('../../createFiles');

const getContainerDir = () => `${process.cwd()}`;
const getPresenterDir = name => `${getContainerDir()}/${name[0].toLowerCase()}${name.substring(1)}Presenter`;
const getPresenterName = name => `${name}Presenter`;

const createComponent = name => {
  console.log(name)
  createContainerComponent({ dir: getContainerDir(), name });
  fs.mkdirSync(getPresenterDir(name));
  createPresenterComponent({ dir: getPresenterDir(name), name: getPresenterName(name) });
};

module.exports = createComponent;
