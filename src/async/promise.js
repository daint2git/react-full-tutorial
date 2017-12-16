let fs = require('fs');
console.log('bat dau');

// // Promise la một đối tượng, khi khởi tạo thì nó sẽ thực hiện bên trong hàm khởi tạo trước
// let promise1 = new Promise(() => {
//   console.log('---hello promise1');
// });

// let promise2 = new Promise((resolve, reject) => {
//   console.log('---hello promise2');
//   resolve('thanh cong promise2');
// });
// promise2.then(() => console.log('Da thuc thi thanh cong promise2'));

// let promise3 = new Promise((resolve, reject) => {
//   console.log('---hello promise3');
//   setTimeout(() => {
//     resolve('thanh cong promise3');
//     //reject('that bai promise3');
//   }, 2000);
// });
// promise3
//   .then(success => console.log(`Da thuc thi: ${success}`))
//   .catch(err => console.log(`Da thuc thi: ${err}`));

// let add = (a, b) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof a != 'number' || typeof b != 'number') {
//         return reject(new Error('Tham so phai la kieu number'));
//       }
//       resolve(a + b);
//     }, 1000);
//   });
// }
// add(5, 6).then(result => console.log(result)).catch(err => console.log(err));

// let promiseRead = new Promise((resolve, reject) => {
//   fs.readFile('./data.txt', 'utf-8', (err, data) => {
//     if (err) return reject(err);
//     resolve(data);
//   });
// });
// promiseRead.then(success => console.log(success)).catch(err => console.log(err));

// let promiseReadCommon = (fileName) => {
//   console.log('promiseReadCommon');
//   return new Promise((resolve, reject) => {
//     console.log('promiseReadCommon -> Promise');
//     fs.readFile(fileName, 'utf-8', (err, data) => {
//       if (err) return reject(err);
//       resolve(data);
//     });
//   });
// };

// promiseReadCommon('./data.txt')
//   .then(success => console.log(success))
//   .catch(err => console.log(err));

let add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a != 'number' || typeof b != 'number') {
        return reject(new Error('Tham so phai la kieu number'));
      }
      resolve(a + b);
    }, 1000);
  });
}

// add(2, 4)
//   .then(res1 => add(res1, 5))
//   .then(res2 => add(res2, 6))
//   .then(res3 => console.log('res3', res3))
//   .catch(err => console.log(err.toString()));

// Promise.all([add(3, 4), add(5, 6)])
//   .then(result => console.log(result))
//   .catch(err => console.log(err));

// Promise.all([add(3, 4), add(5, '6'), add(7, 8)])
//   .then(result => console.log(result))
//   .catch(err => console.log(err));

Promise.race([add(3, 4), add(5, 5), add(5, 6), add(5, '6'), add(7, 8)])
  .then(result => console.log(result))
  .catch(err => console.log(err));

console.log('ket thuc');