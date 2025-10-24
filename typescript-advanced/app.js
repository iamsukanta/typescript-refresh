// const promise1 = new Promise((resolve, reject) => {
//   return fetch('https://jsonplaceholder.typicode.com/posts?limit=5')
//     .then(response => response.json())
//     .then(data => resolve(data))
//     .catch(error => reject(error));
// });

// const promise2 = new Promise((resolve, reject) => {
//   return fetch('https://klljsonplaceholder.typicode.com/comments?limit=5')
//     .then(response => response.json())
//     .then(data => resolve(data))
//     .catch(error => reject(error));
// })


// Promise.allSettled([promise1, promise2])
//   .then((result) => {
//     console.log('Posts:', result);
//     // console.log('Comments:', comments);
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   }) 
  
  
// const myPromise = new Promise((resolve, reject) => {
//   resolve('Promise resolved successfully!');
// });

// function myPromiseHandler(value) {
//   return new Promise((resolve, reject) => {
//     if(value > 10) {
//       resolve('Value is greater than 10');
//     } else {
//       reject('Value is less than or equal to 10');
//     }
//   });
// }

// myPromiseHandler(9)
//   .then((message)=> {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.error(error);    
//   })


async function testAsysnc() {
  return 1010;
}


async function wrapAsync() {
  const result  = await testAsysnc();
  console.log(result);
}

console.log(wrapAsync());