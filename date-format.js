
const moment = require('moment');


const now = moment();


console.log('Дата:', now.format('DD-MM-YYYY'));
console.log('Дата в другом формате:', now.format('MMM Do YY'));
console.log('День недели:', now.format('dddd'));
