let person = {
  fName: "Nezeri",
  lName: "Drake",
  age: 28,
  yearOfBirth: "17.05.XX",
  placeOfBirth: "Dark Worlds, Hastar, XXXXXXX",
};

let arr = ["one", 2, true, "three"];

for(let ind of arr) {
  console.log(ind);
}

for(let obj in person) {
  console.log(obj);
}