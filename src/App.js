import { useState } from "react"

const names = []

const App = () => {
  const [firstName, setFirstName] = useState("")
  const [names, setNames] = useState([])
  

  const formSubmit = (e)=>{
    e.preventDefault()

    if (firstName){
      setNames( (names) => {
        return [...names, firstName] //<== Spread operator
      })
    }else {
      console.log("Empty field")
    }
    
  }


 return <article>
    <form onClick={formSubmit}>
      <div>
        <input 
        className="userName" 
        type="text" placeholder="Name" 
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        />
        

        <input type="Submit"/>
      </div>
    </form>

    {names.map( (oneName, index)=>{
      return <p key={index}>{oneName}</p>
    })}

 </article>  
}

export default App
