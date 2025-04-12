from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
from fastapi.responses import JSONResponse  # Import JSONResponse
from fetch_data import fetch_all_sensor_data

app = FastAPI()

# Define the data model for incoming JSON
class SensorData(BaseModel):
    temperature: float
    humidity: float
    pressure: float
    sound_level: float
    light_intensity: float
    air_quality: int
    motion_detected: bool
    vibration_level: float
    distance: float
    ph_level: float

@app.get("/sensor-data/")
def receive_sensor_data():
    # Log the received data
    data =  fetch_all_sensor_data()
    print("Received Sensor Data:", data)
    return JSONResponse({"message": "Sensor data received successfully", "data": data})
