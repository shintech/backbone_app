## Backbone App

### Synopsis

RootView and App for Backbone + Marionette App

### Usage

    import App from 'backbone_app'

    \\ instantiate and provide custom title
    const app = new App({ title: 'Default') 
    
    const router = new Router({ app: app }) 
    
    app.Router = router
    
    app.start()