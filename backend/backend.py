from flask import Flask, jsonify, request

app = Flask(__name__)

# Rota para responder uma requisição GET
@app.route('/api/hello', methods=['GET'])
def hello():
    return jsonify({"message": "Hello from Python backend!"})

# Rota para receber dados via POST
@app.route('/api/data', methods=['POST'])
def receive_data():
    data = request.json
    return jsonify({"received": data, "status": "success"})

if __name__ == '__main__':
    # Inicia o servidor na porta 5000
    app.run(host='127.0.0.1', port=5000)


print("funfando")