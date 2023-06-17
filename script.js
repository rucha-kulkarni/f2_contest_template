/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log

}

function addData() {
  //Write your code here, just console.log
  const obj = {
    id:4, name: "susan",age:"20",profession:"intern"
  }
  arr.push(obj);
  console.log(arr)
}

function removeAdmin() {
  //Write your code here, just console.log
  const newArr = arr.filter(object => {
    return object.profession != "admin";
  });
  console.log(newArr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    { id: 5, name: "jems", age: "21", profession: "admin" },
    { id: 6, name: "cris", age: "17", profession: "developer" },
    { id: 7, name: "ron", age: "20", profession: "admin" },
  ];
  let newArray = arr.concat(arr2);
  console.log(newArray);
}
