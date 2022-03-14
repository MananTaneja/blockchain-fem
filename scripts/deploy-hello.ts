import "@nomiclabs/hardhat-ethers"
import { ethers } from 'hardhat'

async function getContract() {
    // Contract Factory -> not a contract itself, but contains all the information required to depploy it to the network
    const HWContractFactory = await ethers.getContractFactory('HelloWorld')
    const HWContract = await HWContractFactory.deploy()
    await HWContract.deployed()
    return HWContract
}

async function deploy() {
    const HWContract = await getContract()
    return HWContract // returns the contract
}


// @ts-ignore
async function sayHello(HWContract) {
    // .hello is the function we have defined on the contract
    console.log("Say Hello:", await HWContract.hello())
}

deploy().then(sayHello)