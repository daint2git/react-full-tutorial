let addCommon = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a != 'number' || typeof b != 'number') {
        return reject(new Error('Tham so phai la kieu number'));
      }
      resolve(a + b);
    }, 1000);
  });
};

// let add = async () => {
//     let data = addCommon(5, 6);
//     console.log(data);
// };

let add = async() => {
  let data = await addCommon(5, 6);
  console.log(data);
};

add();