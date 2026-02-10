let products = [
  { id: 1, title: "Laptop", category: "Electronics", price: 50000, stock: 5 },
  { id: 2, title: "Headphones", category: "Electronics", price: 2000, stock: 0 },
  { id: 3, title: "Shoes", category: "Fashion", price: 3000, stock: 10 }
];

let cart = [];
function addToCart(productId, quantity) {
  return new Promise((resolve, reject) => {
    let product = products.find(p => p.id === productId);

    if (!product) {
      reject("Product not found");
    } 
    else if (product.stock >= quantity) {
      // add to cart
      cart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: quantity
      });

      // update stock
      product.stock -= quantity;

      resolve("Product added to cart");
    } 
    else {
      reject("Insufficient stock");
    }
  });
}
addToCart(1, 2)
  .then(msg => {
    console.log(msg);
    console.log("Cart:", cart);
    console.log("Updated Products:", products);
  })
  .catch(err => console.log("Error:", err));
addToCart(2, 1)
  .then(msg => {
    console.log(msg);
    console.log("Cart:", cart);
    console.log("Updated Products:", products);
})
  .catch(err => console.log("Error:", err));