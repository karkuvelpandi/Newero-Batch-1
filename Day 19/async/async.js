const employees = [
  { id: 101, name: "Modi", sal: "555525" },
  { id: 102, name: "Trump", sal: "555525" },
];

// new Promise(()=>{})

const createEmployee = (emp) => {
  return new Promise((resolve, reject) => {
    if (emp) {
      employees.push(emp);
      resolve();
    } else {
      reject();
    }
  });

  //   THis is for callback
  // setTimeout(() => {
  //   employees.push({ id: 103, name: "balu", sal: "666888" });
  //   callBack();
  // }, 4000);
};

const getEmployees = () => {
  setTimeout(() => {
    let list = "";
    for (emp of employees) {
      list = list + `<li>${emp.name}</li>`;
    }
    document.getElementById("body").innerHTML = list;
  }, 1000);
};

//   This is for promise
//   createEmployee({ id: 103, name: "balu", sal: "666888" })
//     .then(() => {
//       getEmployees();
//     })
//     .catch(() => {
//       console.log("Something wrong happened");
//     });

async function start(emp) {
  await createEmployee(emp);
  getEmployees();
}

// Syntax for fat arrow function
// const start=async()=>{
//      await createEmployee(emp);
//   getEmployees();
// }

start({ id: 103, name: "balu", sal: "666888" });
