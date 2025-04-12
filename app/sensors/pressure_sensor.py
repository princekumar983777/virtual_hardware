import random

def get_pressure():
    """Simulate pressure sensor reading in hPa."""
    return round(random.uniform(900, 1100), 2)  # Example: 900 hPa to 1100 hPa