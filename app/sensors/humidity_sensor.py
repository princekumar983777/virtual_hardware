import random

def get_humidity():
    """Simulate humidity sensor reading in percentage."""
    return round(random.uniform(0, 100), 2)  # Example: 0% to 100%