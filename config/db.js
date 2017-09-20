const mongoose = require('mongoose')
const config = require('./' + process.env.NODE_ENV + '.json').mongodb
const url = config.url

let options = {}
mongoose.Promise = global.Promise
mongoose.connect(url, options).then(
  () => {
    console.log(checkConnection())
/** ready to use. The `mongoose.connect()` promise resolves to undefined. */
  },
  err => { throw err/** handle initial connection error */ }
)

function checkConnection () {
  let result = mongoose.connection.readyState
  let str = ''
  if (result === 0) {
    str = 'Disconnected'
  } else if (result === 1) {
    str = 'Connected'
  } else if (result === 2) {
    str = 'Connecting'
  } else if (result === 3) {
    str = 'Disconnecting'
  } else {
    str = 'Unknown'
  }
  return 'mongoose connection state: ' + str
}
