import { useState } from 'react'

import './App.css'
import { document } from 'postcss'

function App() {
  const [mode, setMode] = useState(false)
  const changeTheme = () => {
    console.log(mode);
    
    if (mode == false) {
      setMode(true)

    } else {
      setMode(false)
    }
    
    
}
  
  return (
    <div className='flex items-center justify-center'>
      <div className={ mode == false ? 'bg-white w-full h-screen flex flex-col items-center justify-center':"bg-gray-800 w-full h-screen flex flex-col items-center justify-center" }>
        <p className={ mode == false ? 'text-black text-3xl' : 'text-white text-3xl'}>The page now in the {mode == false ? 'light' : 'dark'} mode</p>
        <button className={ mode == false ? 'bg-black btn text-white my-3': "bg-white btn hover:bg-white text-black my-3" } onClick={changeTheme}>Change theme</button>

     </div>
    </div>
  )
}

export default App
