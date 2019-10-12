const B = require('./b')

const A = module.exports = (function () {
  let id, bInstance

  return {
    init: function init (val) {
      id = val
      bInstance = new B()
      return this
    },

    doStuff: function doStuff () {
      bInstance.stuff()
      return this
    },

    getId: function getId () {
      return id
    }
  }
}())
