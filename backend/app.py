from flask import Flask, request, jsonify
import torch
import numpy as np
from network import CarbonEmissionModel
import joblib
from flask_cors import CORS


app = Flask(__name__)

CORS(app, resources={r"/*": {"origins": "https://nasa-space-challenge.vercel.app"}})

model = CarbonEmissionModel(15,128,64,1)
model.eval()
model.load_state_dict(torch.load("carbon_emission_model.pth"))
model2 = joblib.load("xgb_carbon_emission_model.pkl")


@app.route('/send-data', methods=['POST'])
def receive_data():
    data = request.json  # Get the JSON data sent from JavaScript
      # Print data to the console (for demonstration)
    features = []
    for i in data:
        features.append(data[i])
    #features = torch.tensor(features).type(torch.float32)
    features = np.array(features).reshape(1,-1)
    print(features)
    preds = model2.predict(features)
    
    try:
        preds = model2.predict(features)
    except Exception as e:
        return jsonify({'status': 'error', 'message': 'Prediction failed'}), 500
  
    preds = float(preds[0])
    return jsonify({'status': 'success', 'data_received': data,'data_sent':preds}), 200

if __name__ == '__main__':
    app.run(debug=True)
