import torch
from torch import nn

# Define the neural network architecture
class CarbonEmissionModel(nn.Module):
    def __init__(self , input_layer: int , hidden_1: int , hidden_2: int , output_layer):
      super().__init__()
      self.layer_1 = nn.Linear(in_features=input_layer, out_features=hidden_1)
      self.layer_2 = nn.Linear(in_features=hidden_1, out_features=hidden_2)
      self.layer_3 = nn.Linear(in_features=hidden_2, out_features=output_layer)
      self.relu = nn.ReLU()
      self.dropout = nn.Dropout(0.2)
    
    def forward(self ,X: torch.tensor) -> torch.tensor:
      #block 1
      X = self.layer_1(X)
      X = self.relu(X) 
      X = self.layer_2(X)
      X = self.dropout(X)
      X = self.relu(X)
      X = self.layer_3(X)
      return X.squeeze()



