//Rest Operator
const sum = (...allNumbers) => {
  let result = 0
  for (const oneNumber of allNumbers){
    // result = result + oneNumber
    result += oneNumber
  }
  return result
}

console.log(sum(1, 2))
console.log(sum(1, 2, 3))
console.log(sum(1, 2, 5, 10))
console.log(sum(1, 2, 10, 10, 10, 159, 234, 1112 ))
//I can add how many numbers I need ...

//-----------------------------------------------------------------------
const App = () => {
 return <h2>text</h2>
}

export default App;
