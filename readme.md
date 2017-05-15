## Backbone App

### Synopsis

RootView and App for Backbone + Marionette App

### Usage

    import App from './backbone_app/index'

    const app = new App()
    
    const router = new Router({ app: app})
    
    app.Router = router
    
    app.start()