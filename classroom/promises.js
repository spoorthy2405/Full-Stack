fetch("https://dummyjson.com/products")
  .then(function (response) {
    return response.json();   // convert response to JSON
  })
  .then(function (data) {
    // extract only required fields
    const result = data.products.map(function (product) {
      return {
        id: product.id,
        title: product.title,
        price: product.price,
        stock: product.stock,
        brand: product.brand
      };
    });

    // display in table format
    console.table(result);
  })
  .catch(function (error) {
    console.error("Error fetching data:", error);
  });
