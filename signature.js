const express = require('express');
const router = new express.Router();
const crypto = require("crypto")
const web3 = new (require("web3"))();

router.post('/signature', async (req, res, next) => {
  const account = req.body.account;
  const amount = req.body.amount;

  console.log("account ", account);
  console.log("amount ", amount);
  
  const PRIVATE_KEY = process.env.PRIVATE_KEY;
  const signer_address = process.env.SIGNER_ADDRESS;
  const nonce = crypto.randomBytes(9).toString("base64")
  const content = web3.utils.soliditySha3({
    type: "address",
    value: account
  }, {
    type: "uint256",
    value: amount
  }, {
    type: "string",
    value: nonce
  })
  const { messageHash: hash, signature } = await web3.eth.accounts.sign(content, PRIVATE_KEY);

  console.log("hash ", hash);
  console.log("signature ", signature);
  console.log("confirming pk - signer address ", web3.eth.accounts.privateKeyToAccount(PRIVATE_KEY).address);
  const recovered_address = web3.eth.accounts.recover(content, signature);
  console.log("recovered_address ", recovered_address);
  console.log("signer_address ", signer_address);
  console.log(recovered_address === signer_address);
  res.send({ hash, signature, nonce });
  next();

});

module.exports = router;