from flask import Flask, request, jsonify
import torch
from network import CarbonEmissionModel
import joblib
from sklearn.preprocessing import MinMaxScaler

app = Flask(__name__)

model = CarbonEmissionModel(15,128,64,1)
model.eval()
model.load_state_dict(torch.load("carbon_emission_model.pth"))

scaler = MinMaxScaler()

@app.route('/send-data', methods=['POST'])
def receive_data():
    data = request.json  # Get the JSON data sent from JavaScript
      # Print data to the console (for demonstration)
    features = []
    for i in data:
        features.append(data[i])
    features = torch.tensor(features).type(torch.float32)
    print(features)
    preds = model(features)
    unscaled = preds*100-((preds*100)*(30/100))
    print(float(preds.item()))
    #print(scaler.inverse_transform(preds))
    return jsonify({'status': 'success', 'data_received': data,'data_sent':unscaled.item()}), 200

if __name__ == '__main__':
    app.run(debug=True)
