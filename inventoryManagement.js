// Write your code here
// Create an array called products
const products = ["Laptop", "Phone", "Headphones", "Monitor"];

// Function to log the first product
function logFirstProduct() {
    console.log("First product:", products[0]);
}

// Function to add a new product
function addProduct(productName) {
    products.push(productName);
    console.log("Product added:", products);
}

// Function to update a product name
function updateProductName(position, newName) {
    products[position] = newName;
    console.log("Product updated:", products);
}

// Function to remove the last product
function removeLastProduct() {
    products.pop();
    console.log("Last product removed:", products);
}

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
