// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat"
import dotenv from "dotenv"

dotenv.config()

const INITIAL_SUPPLY: number = parseInt(process.env.INITIAL_SUPPLY || "0")

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const CryptoPoloToken = await ethers.getContractFactory("CryptoPoloToken")
  const cryptoPoloToken = await CryptoPoloToken.deploy(INITIAL_SUPPLY, [])

  await cryptoPoloToken.deployed()

  console.log("CryptoPoloToken deployed to:", cryptoPoloToken.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
