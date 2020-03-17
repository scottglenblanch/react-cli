const getFileContent = require('./GetFileContent');

describe('should return correct string', () => {
  it('', () => {
    const name = 'ContainerComponent';

    expect(typeof getFileContent(name)).toBe('string');
  });
});
