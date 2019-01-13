'use babel'
import Paladin from './objects/paladin'

export default class ProgrammingPaladinsView {
  constructor(serializedState) {
    // Create root element
    console.log('VIEW CONSTRUCTOR')
    this.element = document.createElement('div')
    this.element.classList.add('programming-paladins')

    // Create message element
    const message = document.createElement('div')
    message.textContent = 'The ProgrammingPaladins package is Alive! It\'s ALIVE!'
    message.classList.add('message')
    this.element.appendChild(message)

    this.player = new Paladin()
    this.player.Start(this.element)
  }
  // Returns an object that can be retrieved when package is activated
  serialize () {}
  // Tear down any state and detach
  destroy () {
    this.element.remove()
  }
  getElement () {
    return this.element
  }
}
ProgrammingPaladinsView.prototype.UpdateDisplay = function () {
  // update UpdateDisplay
}
