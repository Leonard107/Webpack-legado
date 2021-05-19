//const logger = require('./logger');
//logger.info('Usando o padrão CommonJS!')

//usando  o Sistema de  Módulos do ES2015 sem Babel

import Pessoa from './pessoa'

const pessoa = new Pessoa('Leonard')
console.log(pessoa.toString())