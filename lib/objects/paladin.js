'use babel'
const path = require('path')
const fs = require('fs')

export default class Paladin {
  constructor () {
    console.log('PALADIN CONSTRUCTOR')
    this.self = document.createElement('img')
    console.log(path.join(__dirname, '../../img/', 'spellun-sprite.png').replace(/\\/g, '/'))
    this.self.src = path.join(__dirname, '../../img/', 'spellun-sprite.png').replace(/\\/g, '/')
    this.stats = {
      hp: 100,
      at: 10,
      df: 10
    }
  }
}
Paladin.prototype.Start = function (pane) {
  pane.appendChild(this.self)
}
