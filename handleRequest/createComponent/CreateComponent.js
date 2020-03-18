const process = require('process');
const {
  createContainerComponent,
  createPresenterComponent
} = require('../../createFiles');

const getContainerDir = () => `${process.cwd()}`;
const getPresenterDir = name => `${getContainerDir()}/${name[0].toLowerCase()}${name.substring(1)}`;

const createComponent = name => {
  createContainerComponent({ dir: getContainerDir(), name });
  createPresenterComponent({ dir: getPresenterDir(), name });
};

module.exports = createComponent;
