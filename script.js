


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




const test = ((time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
});

/*

test(2000).then(() => {
  console.log(`2000 ms`);
});

test(6000).then(() => {
  console.log(`6000 ms`);
});

*/

/*

Promise.all([test(2000), test(6000)], test(3000)).then(() => {
  console.log("All")
});

*/



Promise.race([test(2000), test(3000)]).then(() => {
  console.log("All")
});
