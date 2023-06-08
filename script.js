


console.log("Data Request...");

setTimeout(() => {
  console.log("Getting ready...");

  const product = {
    name: 'TV',
    price: 1000
  };

  setTimeout(() => {
    product.status = "ordered";
    console.log(product);
  }, 3000);
}, 2000);