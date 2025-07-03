import { useState } from "react"

const App = () => {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState ("")
  const [users, setUsers] = useState([])

  const formSubmit = (e)=>{
    e.preventDefault()

    if (fullName && email && age) {
      const oneUser = {fullName, email, age}    //{fullName: fullName, email: email, age: age}
      setUsers( (users)=> {
        return [...users, oneUser]
      })
    } else {
      console.log("Fill the both fields")
    }

    setFullName("")
    setEmail("")
    setAge ("")

  }

  return <article>
    <form onSubmit={formSubmit}>
      <input 
      className="userInfo" 
      type="text" 
      placeholder="Name" 
      value={fullName}
      onChange={ (e)=> setFullName(e.target.value) }
      />

      <input 
      className="userInfo" 
      type="email" 
      placeholder="Email"
      value={email}
      onChange={ (e)=> setEmail(e.target.value) }
      />

      <input 
      className="userInfo" 
      type="number" 
      placeholder="Age"
      value={age}
      onChange={ (e)=> setAge(e.target.value) }
      />

      <input type="submit"/>
    </form>

    {users.map( (oneUser, index) => {
      const {fullName, email, age} = oneUser

      return <div className="item" key={index}>
        <h4>{fullName}</h4>
        <p>{email}</p>
        <p>{age}</p>
      </div>
    })}

  </article>
  
}

export default App