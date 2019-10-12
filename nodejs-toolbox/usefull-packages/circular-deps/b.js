const A = require('./a')

const B = module.exports = function () {
  return {
    stuff: function stuff () {
      console.log('I got the id: ', A.getId())
    }
  }
}
