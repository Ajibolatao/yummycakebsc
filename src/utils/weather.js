// const request = require('request')

// const weather = (latitude,longitude,callback) => {

//     const url = 'http://api.weatherstack.com/current?access_key=90765d2500bc845bc791ba74dc453d12&query='+ latitude + ',' + longitude

//     request({ url, json:true }, (error, {body}) => {
//         if (error) {
//             callback('Unable to Connect',undefined)
//         } else if (body.error) {
//             callback('No such place',undefined)
//         } else {
//             callback(undefined, 'The weather is hot and its ' + 
//                 body.current.temperature +
//                 ' degrees but it feels like ' +
//                 body.current.feelslike + 
//                 ' degrees'
//             )
//     }
//     })}

//     async function getTikiPrice() {
//         const functionResponse = await getAmountsOut(`${1 * Math.pow(10, tikiDecimals)}`, [tikiContractAddress, bnb.address, busd.address])
//         const priceInUsd = Number(functionResponse.amounts[2].toString()) / Math.pow(10, busd.decimals)
//         console.log('tiki', priceInUsd)
//         return priceInUsd
//       }

//     const apiKey = '7ZZ4WKZZIB8B71XYFV8Z1I1WD7B44GZCUJ'

//     const startBlock = currBlock-Math.floor((((chunk+1)*hoursPerChunk)*60*60)/3)
//     const endBlock = currBlock-Math.floor(((chunk*hoursPerChunk)*60*60)/3)
//     const currChunkRes = fetch(`https://api.bscscan.com/api?module=account&action=tokentx&address=0xc21e7663a8ca376d0fb90025698ae32d57256fce&startblock=${startBlock}&endblock=${endBlock}&sort=asc&apikey=${apiKey}`)

//     console.log(currChunkRes)

// module.exports = weather