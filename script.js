


console.log("Data Request...");

const req = new Promise(function(resolve, reject){
  setTimeout(() => {
    console.log("Getting ready...");
  
    const product = {
      name: 'TV',
      price: 1000
    };
  
    resolve(product);

  }, 2000);
});

req.then((product) => {
  const req2 = new Promise((resolve, reject) => {
    setTimeout(() => {
     product.status = "ordered";

     resolve(product);
    }, 3000);
  });

    req2.then((data) => {
      console.log(data);
    });

});


