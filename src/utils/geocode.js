const request = require('request')
////
const geocode = (address,callback) => {

    // const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?limit=1&access_token=pk.eyJ1IjoiYmVkb2dsaWtlbW9vIiwiYSI6ImNrODQ1YnVsaDFqdXQzZW5xb3B2N2d5a3EifQ.Mp_bQC8lxzdBS4CPUogYTg'

    const apiKey = '7ZZ4WKZZIB8B71XYFV8Z1I1WD7B44GZCUJ'

    const DogeBNBContractAddress = '0x3c1f4ea71af9cf120115cd74b2d0c08e075b9d3d'
    const DogeBNBDecimals = 18

    const bnb = {
        address: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
        decimals: 18,
      }
      const busd = {
        address: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
        decimals: 18,
      }
    

      async function getChunksAndMergeThenReturnHighest(chunks, currBlock, hoursPerChunk) {
        let chunkData = []
        const chunksArray = Array.from(Array(chunks).keys())
        const chunkIterator = chunksArray[Symbol.iterator]();
        for (const chunk of chunkIterator) {
          const startBlock = currBlock-Math.floor((((chunk+1)*hoursPerChunk)*60*60)/3)
          const endBlock = currBlock-Math.floor(((chunk*hoursPerChunk)*60*60)/3)
          // console.log(`Start Block: ${startBlock} | End Block: ${endBlock}`)
          const currChunkRes = await fetch(`https://api.bscscan.com/api?module=account&action=tokentx&address=0xc21e7663a8ca376d0fb90025698ae32d57256fce&startblock=${startBlock}&endblock=${endBlock}&sort=asc&apikey=${apiKey}`)
          const currChunk = await currChunkRes.json()
          chunkData.push(currChunk.result)
        }
        chunkData = chunkData.flat()
        const highest = chunkData.sort(function(a, b) {return a.value - b.value;}).slice(-20);
        let cleanedHighest = []
        for (const buyer of highest) {
          let tx;
          try {
            tx = await provider.getTransaction(buyer.hash)
            buyer.bnbValue = tx.value/1e18
            cleanedHighest.push(buyer)
          } catch (e) {
            continue
          }
        }
      
        return cleanedHighest.filter(buyer => buyer.bnbValue !== 0).slice(0,9)
      }


    request({ url:url, json:true }, (error, response) => {
        if (error) {
            callback('Unable to connect',undefined)
        } else if (response.body.features.length === 0) {
            callback('No such results',undefined)
        } else {
            callback(undefined, { 
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode;