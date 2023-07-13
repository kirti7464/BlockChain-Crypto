# Project

## Block-Chain Crypto 

Get the list of all the top 100 cryptocurrency coins in the world using the "/assets" api ( the first api mentioned in the documentation)
Save all the 100 coins in database ( each document to have data of 1 coin)
The schema should have the following 4 keys:
 {  "symbol" // String and Unique
    "name": // String and Unique
    "marketCapUsd": // String  ( not Number)
     "priceUsd": //String
   }
Notice that changePercent24Hr key is not present in the schema or collection

Send back the list of all the coins sorted in order of their growth in last 24 hours   i.e. sort all the 100 coins based on their changePercent24Hr and send the sorted array in response
