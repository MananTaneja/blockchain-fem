import '@nomiclabs/hardhat-ethers'
import { ethers } from 'hardhat'
import { expect } from 'chai'

describe('hello world', () => {
    it('should say hi', async () => {



        const HW = await ethers.getContractFactory('HelloWorld') // contract name goes here
        const hello = await HW.deploy()
        await hello.deployed()

        expect(await hello.hello()).to.equal('Hello, World!')
    })
})