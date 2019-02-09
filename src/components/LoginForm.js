import React from 'react' 

const LoginForm = ({
   handleSubmit,
   handleUsernameChange,
   handlePasswordChange,
   username, 
   password 
  }) => {
  return (
    <div>
      <h2>Kirjaudu</h2>
      <form onSubmit={handleSubmit}>
        <div>
          käyttäjätunnus
          <input
            id='username'
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          salasana
          <input
            id='password'
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
      </div>
        <button type="submit">kirjaudu</button>
      </form>
    </div>
  )
}

export default LoginForm