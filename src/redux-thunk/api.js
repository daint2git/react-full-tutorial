const people = [{
    name: 'Nader',
    age: 36
  },
  {
    name: 'Amanda',
    age: 24
  },
  {
    name: 'Jason',
    age: 44
  }
];

const getPeople = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(people)
    }, 2000)
  })
};

export default getPeople;