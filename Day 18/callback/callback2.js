const employees = [
  { id: 101, name: "Modi", sal: "555525" },
  { id: 102, name: "Trump", sal: "555525" },
];

const createEmployee = (callBack) => {
  setTimeout(() => {
    employees.push({ id: 103, name: "balu", sal: "666888" });
    callBack();
  }, 4000);
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

createEmployee(getEmployees);
// getEmployees();
