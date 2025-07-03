import { useState } from "react"

const App = () => {
  const [firstName, setFirstName] = useState("")

  const formSubmit = (e)=>{
    e.preventDefault()
    console.log(firstName)
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
 </article>  
}

export default App
