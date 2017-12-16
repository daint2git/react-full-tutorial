// let square = (a, b, h) => (a + b) * h / 2;
// console.log('Dien tich hinh thang: ', square(2, 3, 5));

let add = (a, b, cb) => {
  setTimeout(() => {
    let err, result;
    if (typeof a != 'number' || typeof b != 'number') {
      err = 'Tham so phai co kieu number';
    } else {
      result = a + b;
    }
    return cb(err, result);
  }, 1000);
}

add(4, 5, (err, result) => {
  console.log('add(4, 5, (err, result): ', "err: " + err, ",result: " + result);
  if (err) return console.log('err: ', err);
  console.log('result: ', result);
})

add(4, 'a', (err, result) => {
  console.log('add(4, "a", (err, result): ', "err: " + err, ",result: " + result);
  if (err) return console.log('err: ', err);
  console.log('result: ', result);
})

callbackFunction = (err, result) => {
  console.log('callbackFunction: ', "err: " + err, ",result: " + result);
  if (err) return console.log('callbackFunction -> err: ', err);
  console.log('callbackFunction -> result: ', result);
}

add(4, 10, callbackFunction);

console.log('ket thuc');