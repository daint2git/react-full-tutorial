const fs = require('fs');

// './data.txt' đọc file xong thì thực hiện callback function (err, data) => {}
fs.readFile('./data.txt', 'utf-8', (err, data) => {
  console.log('-------------------\n');
  if (err) return console.log('err: ' + err);
  console.log('readFile -> data: ', data)
});

console.log('-------------------\n');
let data = fs.readFileSync('./data.txt', 'utf-8');
console.log('readFileSync -> data: ', data)

console.log('-------------------\n');
console.log('ket thuc')