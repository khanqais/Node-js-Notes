//modules
const names=require('./2_1module');
const sayHi=require('./2_2module');
const x=require('./2_3module');
require('./2_4module')
console.log(x);

sayHi('momos')
sayHi(names.qais)
sayHi(names.khan)