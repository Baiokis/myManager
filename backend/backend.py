from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/api/hello', methods=['GET'])
def hello():
    return jsonify({"message": "Hello from Python backend!"})

@app.route('/api/data', methods=['POST'])
def receive_data():
    data = request.json
    return jsonify({"received": data, "status": "success"})

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8000)
