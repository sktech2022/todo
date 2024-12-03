import React, { useState } from 'react'
import TodoApp from './TodoApp'
import FocusInput from './FocusInput'

const App = () => {
  const [choose,setChoose] = useState(false)
  return (
    <>
    <div className='container'>
      <button className='btn btn-info my-3' onClick={()=>setChoose(!choose)}> {choose?"Show Ref":"Show Todo"} </button>
      {choose ? <TodoApp/> : <FocusInput/>}
    </div>      
    </>
  )
}

export default App