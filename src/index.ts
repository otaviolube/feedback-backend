import * as fs from 'fs';

const funcao = () => {
  fs.readFileSync('../teste');
  return true;
};

funcao();
