import Web3 from 'web3'

const web3 = new Web3(`http://localhost:3000/${process.env.INFURA_PROJECT_ID}`)

const app = async (req, res) => {
  const blockNumber = await web3.eth.getBlockNumber();
  res.send({ blockNumber })
}

export default app;
