// Define array of product objects
const products = [
    { name: "Smartphone", category: "Electronics", price: 699 },
    { name: "Laptop", category: "Electronics", price: 999 },
    { name: "T-shirt", category: "Clothing", price: 19 },
    { name: "Jeans", category: "Clothing", price: 49 },
    { name: "Novel", category: "Books", price: 12 },
    { name: "E-Reader", category: "Electronics", price: 199 },
    { name: "Jacket", category: "Clothing", price: 89 },
    { name: "Textbook", category: "Books", price: 45 }
];

// Function to display products based on category
function filterProducts(category) {
    const productDisplay = document.getElementById('productDisplay');
    productDisplay.innerHTML = ''; // Clear current products

    // Filter products based on category
    const filteredProducts = category === 'All' ? products : products.filter(product => product.category === category);

    // Dynamically create and display product items
    filteredProducts.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <h2>${product.name}</h2>
            <p>Category: ${product.category}</p>
            <p class="price">$${product.price.toFixed(2)}</p>
        `;
        productDisplay.appendChild(productItem);
    });
}

// Initially display all products
filterProducts('All');
