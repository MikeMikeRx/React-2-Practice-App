//Spread operator

//Consolidtaion
const studentGroup = ["Michal", "Martin", "Daniel", "Alyce"]
const allStudents = ["Paul", "Claudia", ...studentGroup, "Francis"]

//Function arguments
const numbers = [1, 2, 3]
const multipleNumbers = (a, b, c)=> {
  console.log(a * b * c)
}
multipleNumbers(...numbers)

//Array copy
const students1 = ["Martin", "Daniel", "Alyce"]
const students2 = [...students1]
students2.push("Paul")
// console.log(students1) //(3) ['Martin', 'Daniel', 'Alyce']
// console.log(students2) //(4) ['Martin', 'Daniel', 'Alyce', 'Paul']

//Concatenation (linking or joining things together in a sequence)
const names1 = ["Daniel", "Alyce"]
const names2 = ["Paul", "Claudia"]
const newArray1 = names1.concat(names2)

newArray1.push("Paul")
console.log(newArray1) //(5) ['Daniel', 'Alyce', 'Paul', 'Claudia', 'Paul']

const newArray2 = [...names1, "Alexandara", ...names2]
console.log(newArray2) //(5) ['Daniel', 'Alyce', 'Alexandara', 'Paul', 'Claudia']


//-----------------------------------------------------------------------
const App = () => {
 return <h2>text</h2>
}

export default App;
