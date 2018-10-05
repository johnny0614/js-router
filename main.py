from flask import Flask, send_from_directory, request
import time

app = Flask(__name__)

@app.route('/', defaults={ 'path': '' })
@app.route('/<path:path>')
def index(path):
    return send_from_directory('./','index.html')

if __name__ == '__main__':
    app.run(port=8000, debug=True)