from app.sensors.temperature_sensor import get_temperature
from app.sensors.humidity_sensor import get_humidity
from app.sensors.pressure_sensor import get_pressure
from app.sensors.sound_sensor import get_sound_level
from app.sensors.light_sensor import get_light_intensity
from app.sensors.gas_sensor import get_air_quality
from app.sensors.motion_sensor import get_motion
from app.sensors.vibration_sensor import get_vibration
from app.sensors.distance_sensor import get_distance
from app.sensors.ph_sensor import get_ph

def fetch_all_sensor_data():
    """Fetch all sensor data and return as a dictionary."""
    return {
        "temperature": get_temperature(),
        "humidity": get_humidity(),
        "pressure": get_pressure(),
        "sound_level": get_sound_level(),
        "light_intensity": get_light_intensity(),
        "air_quality": get_air_quality(),
        "motion_detected": get_motion(),
        "vibration_level": get_vibration(),
        "distance": get_distance(),
        "ph_level": get_ph(),
    }

if __name__ == "__main__":
    print("Temperature:", get_temperature(), "°C")
    print("Humidity:", get_humidity(), "%")
    print("Pressure:", get_pressure(), "hPa")
    print("Sound Level:", get_sound_level(), "dB")
    print("Light Intensity:", get_light_intensity(), "lux")
    print("Air Quality Index (AQI):", get_air_quality())
    print("Motion Detected:", get_motion())
    print("Vibration Level:", get_vibration())
    print("Distance:", get_distance(), "cm")
    print("pH Level:", get_ph())