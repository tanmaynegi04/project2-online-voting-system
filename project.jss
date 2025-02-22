// Example of getting product data from the backend and populating the page

window.onload = function() {
    // Fetch product data
    fetch('http://localhost:8080/api/products')
    .then(response => response.json())
    .then(data => {
        const productList = document.getElementById('product-list');
        data.products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'product';
            productElement.innerHTML = `
                <h3>${product.name}</h3>
                <p>Price: $${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productList.appendChild(productElement);
        });
    });

    // Fetch recommended products
    fetch('http://localhost:8080/api/recommendations')
    .then(response => response.json())
    .then(data => {
        const recommendedList = document.getElementById('recommended-products');
        data.recommendations.forEach(product => {
            const recommendedProductElement = document.createElement('div');
            recommendedProductElement.className = 'recommended-product';
            recommendedProductElement.innerHTML = `
                <h3>${product.name}</h3>
                <p>Price: $${product.price}</p>
            `;
            recommendedList.appendChild(recommendedProductElement);
        });
    });
};

function addToCart(productId) {
    // Logic to add product to cart (not implemented in this basic example)
    alert(`Product ${productId} added to cart!`);
}
