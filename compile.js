const path = require('path');
const fs = require('fs');
const solc = require('solc')
const lotteryPath = path.resolve(__dirname, 'contracts', 'Lottery.sol');
const source = fs.readFileSync(lotteryPath, 'utf8');

// compile function source = source code of .sol file and number of contractions
module.exports = solc.compile(source, 1).contracts[':Lottery'];
