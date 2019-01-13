'use babel'

import ProgrammingPaladinsView from './programming-paladins-view'
import { CompositeDisposable } from 'atom'

export default {

  programmingPaladinsView: null,
  modalPanel: null,
  subscriptions: null,

  activate (state) {
    this.programmingPaladinsView = new ProgrammingPaladinsView(state.programmingPaladinsViewState)
    this.modalPanel = atom.workspace.addTopPanel({
      item: this.programmingPaladinsView.getElement(),
      visible: false
    })
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable()

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'programming-paladins:toggle': () => this.toggle()
    }))
  },
  deactivate () {
    this.modalPanel.destroy()
    this.subscriptions.dispose()
    this.programmingPaladinsView.destroy()
  },
  serialize () {
    return {
      programmingPaladinsViewState: this.programmingPaladinsView.serialize()
    }
  },
  toggle () {
    console.log('ProgrammingPaladins was toggled!')
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    )
  }
}
