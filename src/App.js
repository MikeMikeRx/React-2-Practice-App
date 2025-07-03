import { useState } from "react"

const App = () => {
  const [firstName, setFirstName] = useState("")

  const formSubmit = (e)=>{
    e.preventDefault()
  }

 return <article>
    <form>
      <div>
        <input 
        className="userName" 
        type="text" placeholder="Name" 
        value={firstName}/>
        
        <input onClick={formSubmit} type="Submit"/>
      </div>
    </form>
 </article>  
}

export default App
