// const amount = 12

// if (amount < 10) {
//     console.log('Small number!')
// } else {
//     console.log('Large number!')
// }
// console.log(`Hey it's my first node app!!!`)

// console.log(__filename)
// setInterval(() => {
//     console.log('Hello Node Js')
// }, 1000)

// const names = require('./name')
// console.log(names)


// const os = require('os')

// const user = os.userInfo()

// console.log(user)

// console.log(`The System Uptime is ${os.uptime} milesecond`)




// const { readFileSync, writeFileSync } = require('fs')

// const first = readFileSync('./content/first.txt', 'utf-8')
// const second = readFileSync('./content/second.txt', 'utf-8')


// // console.log(first, second)

// writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`)


// const { readFile, writeFile } = require('fs')
// readFile('./content/first.txt', 'utf-8', (err, result) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log(result)
// })

// writeFile('./content/result-async.txt',
//     'Here is the result of Async',
//     (err, result) => {
//         if (err) {
//             console.log(err)
//             return;
//         }
//         console.log(result)
//     }
// )

// const http = require('http')

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.end('Welcome to our home page')
//     }
//     else if (req.url === '/about') {
//         res.end('Here is our short history')
//     }
//     else {
//         res.end(`
//      <h1>Oops!</h1>
//      <p>We can't seem to find the page you are looking for</p>
//      <a href="/">Back home </a>
//      `)
//     }
// })

// server.listen(5000)


const _ = require('lodash')
const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)