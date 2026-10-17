// Write your code here

// Create an array called products
const products = ["Laptop", "Phone", "Headphones", "Monitor"];

// Function to log the first product
function logFirstProduct() {
    console.log(products[0]);
}

// Function to add a new product
function addProduct(productName) {
    products.push(productName);
}

// Function to update a product name
function updateProductName(position, newName) {
    products[position] = newName;
}

// Function to remove the last product
function removeLastProduct() {
    products.pop();
}

// Export the necessary parts for testing
module.exports = {
  logFirstProduct,
  addProduct,
  updateProductName,
  removeLastProduct,
  products
};
