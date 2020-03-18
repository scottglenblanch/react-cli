const argv = require('yargs').argv;
const { createComponent } = require('../handleRequest');

const isComponent = () => argv.component && argv.componentName;

if(isComponent()) {
  createComponent(argv.componentName);
} else {
  console.log('did not understand command');
}