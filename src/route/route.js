const express = require("express")
const router =express.Router()
const Coin = require("../model/model")
const axios = require('axios');

router.get("/assets",async function(req,res){
    try {
        //taking data from api
        const input = await axios.get('https://api.coincap.io/v2/assets?limit=100');
    
        const coinsData = input.data.data;
        const coins = coinsData.map((x) => ({
          symbol: x.symbol,
          name: x.name,
          marketCapUsd: x.marketCapUsd,
          priceUsd: x.priceUsd,
        }));
    
        //saving data in databse
        await Coin.create(coins);
    
        // Sorting coins in descending order
        const sortedCoins = coins.sort((a, b) => b.changePercent24Hr - a.changePercent24Hr);
    
        res.status(200).send({status:true,message:"Created coins are:",data:sortedCoins});
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch coins' });
      }
})

module.exports= router