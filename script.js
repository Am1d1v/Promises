


console.log("Data Request...");

const req = new Promise(function(resolve, reject){
  setTimeout(() => {
    console.log("Getting ready...");
  
    const product = {
      name: 'TV',
      price: 1000
    };
  
    resolve(product);
     // reject();
  }, 2000);
});

req.then((product) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
     product.status = "ordered";

     resolve(product);
    }, 3000);
    }).then((data) => {
      data.modify = true;
      return data;
  }).then((data) => {
    console.log(data);
  });
}).catch(() => {
  console.error("Error");
}).finally(() => {
    console.log("Final");
});


