function solve(input, criteria) {

    let data = JSON.parse(input);
    let splittedCriteria = criteria.split('-');
    let sortProp = splittedCriteria[0];
    let sortCriteria = splittedCriteria[1];

    console.log([...data.filter(e =>
        e[sortProp] === sortCriteria)].map((e, i) =>
            `${i}. ${e['first_name']} ${e['last_name']} - ${e['email']}`
        ).join('\n'));
}

solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female'
);