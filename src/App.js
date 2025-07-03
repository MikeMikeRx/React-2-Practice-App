const App = () => {
  
  const formSubmit = (e)=>{
    e.preventDefault()
  }

 return <article>
    <form>
      <div>
        <input className="userName" type="text" placeholder="Name"/>
        <input onClick={formSubmit} type="Submit"/>
      </div>
    </form>
 </article>  
}

export default App
