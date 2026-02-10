const readline = require("readline");

// Node fetch (Node 18+ works directly)
let products = [];
let cart = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fetch products using Promises
fetch("https://dummyjson.com/products")
  .then(res => res.json())
  .then(data => {
    products = data.products.map(p => ({
      id: p.id,
      title: p.title,
      category: p.category,
      price: p.price,
      stock: p.stock
    }));

    console.log("\n📦 Available Products");
    console.table(products);

    askProduct();
  })
  .catch(err => console.error("API Error:", err));


// Ask Product ID
function askProduct() {
  rl.question("Enter Product ID: ", id => {
    rl.question("Enter Quantity: ", qty => {
      addToCart(Number(id), Number(qty));
      askMore();
    });
  });
}

// Ask to continue
function askMore() {
  rl.question("Add more products? (yes/no): ", answer => {
    if (answer.toLowerCase() === "yes") {
      askProduct();
    } else {
      displayCart();
      rl.close();
    }
  });
}

// Add to cart logic
function addToCart(productId, quantity) {
  const product = products.find(p => p.id === productId);

  if (!product) {
    console.log("❌ Invalid Product ID");
    return;
  }

  if (quantity <= 0 || quantity > product.stock) {
    console.log("❌ Invalid Quantity");
    return;
  }

  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.quantity += quantity;
    existing.total = existing.quantity * existing.price;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      category: product.category,
      price: product.price,
      quantity: quantity,
      total: product.price * quantity
    });
  }

  console.log("✅ Item added to cart");
}

// Display cart
function displayCart() {
  console.log("\n🛒 Final Cart");
  console.table(cart);

  const grandTotal = cart.reduce((sum, item) => sum + item.total, 0);
  console.log("💰 Grand Total:", grandTotal);
}
