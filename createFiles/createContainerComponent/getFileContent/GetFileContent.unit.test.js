const getFileContent = require('./GetFileContent');

it('getFileContent should return a string', () => {
  const name = 'ContainerComponent';

  expect(typeof getFileContent(name)).toBe('string');
});
