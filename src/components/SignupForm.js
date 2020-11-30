import React, {useState} from 'react'

export default function SignupForm(props) {
  const [state, setState] = useState({
    name: "",
    age: null,
    username: "",
    password: ""
  })

  const handleChange = (e) => {
    setState({...state, [e.target.placeholder]: e.target.value})
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      fetch(`http://localhost:3000/api/v1/users`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
          },
          body: JSON.stringify({user: state})
      })
      .then(resp => resp.json())
      .then(data => {
          localStorage.setItem("token", data.jwt)
          props.handleLogin(data.user)
      })
      setState({
        name: "",
        age: null,
        username: "",
        password: ""
      })
  }

  // add to css
  const formDivStyle = {
      margin: "auto",
      padding: "20px",
      width: "80%"
  }
  
  return(
      <div style={formDivStyle}>
          <h1>Sign Up</h1>
          <form className="ui form" onSubmit={handleSubmit}>
              <div className="field">
                  <label>Name</label>
                  <input value={state.name} onChange={handleChange} type="text" placeholder="name"/>
              </div>
              <div className="field">
                  <label>Age</label>
                  <input value={state.age} onChange={handleChange} type="number" placeholder="age"/>
              </div>
              <div className="field">
                  <label>Username</label>
                  <input value={state.username} onChange={handleChange} type="text" placeholder="username"/>
              </div>
              <div className="field">
                  <label>Password</label>
                  <input value={state.password} onChange={handleChange} type="password" placeholder="password"/>
              </div>
              
              <button className="ui button" type="submit">Submit</button>
          </form>
      </div>
  )
}