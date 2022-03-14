import '@nomiclabs/hardhat-ethers'
import { ethers } from 'hardhat'
import { expect } from 'chai'

/* 
    Whenever hardhat runs the tests, it creates a local network (ephemeral) just for the test, and thenm shuts it down for consistency
*/

describe('hello world', () => {
    it('should say hi', async () => {



        const HW = await ethers.getContractFactory('HelloWorld') // contract name goes here
        const hello = await HW.deploy()
        // have to do this since things take time to be consistent on blockachain -> enough machines have to verify the transaction before it is considered deployed
        await hello.deployed()

        expect(await hello.hello()).to.equal('Hello, World!')
    })
})

/*

    1. Setup our environment
    2. Deploy yout contact
    3. Call our function to test

 */