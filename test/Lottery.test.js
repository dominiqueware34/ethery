const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const provider = ganache.provider();
const web3 = new Web3(provider);

const { interface, bytecode } = require('../compile');

let accounts, account,lottery;

beforeEach(async ()=>{
    [account, ...accounts] = await web3.eth.getAccounts();

    // deploy instance of contract
    lottery = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode})
        .send({from: account, gas: '1000000'})
});

describe('Lottery', ()=>{
    it('deploys a contract succesfully',  ()=>{
        assert.ok(lottery.options.address);
    })
    // it()
    // it()
    // it()
    // it()
})