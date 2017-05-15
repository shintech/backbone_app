import Backbone from 'backbone'
import Marionette from 'marionette'
import RootView from './app/views/RootView'

const App = Marionette.Application.extend({
  region: 'body',
  initialize: function (options) {
    if (options) {
      this.title = options.title
    } else {
      this.title = 'Default'
    }
  },
  onStart: function () {
    this.view = new RootView({ title: this.title })
    this.showView(this.view)
    Backbone.history.start()
  }
})

export default App
