// const students = [
//     {name: 'Remy', cohort: 'Jan'},
//     {name: 'Genevieve', cohort: 'March'},
//     {name: 'Chuck', cohort: 'Jan'},
//     {name: 'Osmund', cohort: 'June'},
//     {name: 'Nikki', cohort: 'June'},
//     {name: 'Boris', cohort: 'June'}
// ];
//
// for (var student of students) {
//   console.log(`name: ${ student.name }, cohort: ${ student.cohort }`);
// };

const users = {
    employees: [
        { 'first_name':  'Miguel', 'last_name' : 'Jones' },
        { 'first_name' : 'Ernie', 'last_name' : 'Bertson' },
        { 'first_name' : 'Nora', 'last_name' : 'Lu' },
        { 'first_name' : 'Sally', 'last_name' : 'Barkyoumb '}
    ],
    managers: [
        { 'first_name' : 'Lillian', 'last_name' : 'Chambers' },
        { 'first_name' : 'Gordon', 'last_name' : 'Poe '}
    ]
};

for (var people in users) {
  console.log(people.toUpperCase());
  for (var i = 0; i < users[people].length; i++) {
    let num = i + 1;
    let fname = users[people][i].first_name.toUpperCase();
    let lname = users[people][i].last_name.toUpperCase();
    let len = fname.length + lname.length;
    console.log(`${num} - ${lname}, ${fname} - ${len}`);
  };
}















































// end
