import pandas as pd
import random

# Dummy data for products
products = [
    {"id": 1, "name": "Laptop", "price": 999.99},
    {"id": 2, "name": "Smartphone", "price": 499.99},
    {"id": 3, "name": "Headphones", "price": 89.99},
    {"id": 4, "name": "Smartwatch", "price": 199.99},
    {"id": 5, "name": "Bluetooth Speaker", "price": 59.99},
]

def get_recommendations():
    # Simple recommendation logic (can be replaced with ML models)
    recommended_products = random.sample(products, 2)  # Get 2 random recommended products
    return recommended_products

# To call the function and get recommendations
if __name__ == "__main__":
    recommendations = get_recommendations()
    for rec in recommendations:
        print(f"Recommended: {rec['name']} - ${rec['price']}")
