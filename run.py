from microservice import app

#Load this config object for development mode
app.config.from_object('configurations.ProductionConfig')

if __name__ == "__main__":
    from waitress import serve
    serve(app, host="0.0.0.0", port=8080)