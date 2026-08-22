import {  Show, SignInButton, UserButton } from '@clerk/react'
import './App.css'


function App() {

  return (
    <>
      <h1>yeahh it's your first project</h1>
      <Show when="signed-out">
         <SignInButton mode='modal'>
          <button>Login</button>
         </SignInButton>
      </Show>
      <Show when="signed-in">
         <UserButton/>
      </Show>
    </>
  )
}

export default App
