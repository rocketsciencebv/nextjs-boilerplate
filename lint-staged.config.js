module.exports = {
  '*.ts': [
    'prettier --parser typescript --loglevel warn --write',
    'eslint --no-ignore',
  ],
  '*.scss': 'prettier --parser scss --loglevel warn --write',
};
