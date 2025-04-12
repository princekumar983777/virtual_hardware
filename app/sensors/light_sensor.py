import random

def get_light_intensity():
    """Simulate light intensity in lux."""
    return round(random.uniform(0, 10000), 2)  # Example: 0 lux to 10,000 lux