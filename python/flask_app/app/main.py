from flask import Flask

app = Flask(__name__)

@app.route('/')

def hello():
    #return "Hello, Docker Flask app is running successfully!"
    return """
    <h1>Flask Image Demo</h1>
    <img src="200.jpg" alt="Image">
    """

if __name__ == '__main__':
    app.run(host='0.0.0.0')
