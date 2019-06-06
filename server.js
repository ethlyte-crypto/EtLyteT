const express = require('express');
const app = express();
const bodyParser = require('body-parser');
Web3 = require('web3');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.post('/v1/send/eth', function (req, res) {

            let contractAddress = req.body.contract;
            let myAddress = req.body.address;
            let toAddress = req.body.toaddress;
            let amount = req.body.amount;
            let mykey = req.body.algo;
            let fees = req.body.fees;
            let coin_name = req.body.coin;

            var Tx = require('ethereumjs-tx');
            var Web3 = require('web3')
            var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))

            let amt =  web3.utils.toWei(amount, 'ether') ;
            // get transaction count, later will used as nonce
            web3.eth.getTransactionCount(myAddress).then(function(v){
            console.log(coin_name);
            count = v

            // set your private key here, we'll sign the transaction below
            var privateKey = new Buffer.from(mykey, 'hex');

            abiArray =  [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name"$


            var contract = new web3.eth.Contract(abiArray, contractAddress, {from: myAddress})
            var rawTransaction = {"from":myAddress, "gasPrice":web3.utils.toHex(fees * 1e9),"gasLimit":web3.utils.toHex(210000),"to":contractAddress,"value":"0x0","data":contract.methods.transfer(toAddress,$
            var transaction = new Tx(rawTransaction)
            transaction.sign(privateKey)

            web3.eth.sendSignedTransaction('0x' + transaction.serialize().toString('hex'),function(err, hash) {
                if (!err)
                 return res.send({ error: false, data: hash, message: 'success' });
                else
                 return res.send({ error: true, data: hash, message: 'failed' });
            });

            })
          });
		  
app.all("*", function (req, res, next) {
return res.send('page not found');
next();
});

app.listen(8080, function () {
console.log('Node app is running on port 8080');
});

module.exports = app;

