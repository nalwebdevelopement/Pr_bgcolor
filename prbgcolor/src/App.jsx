import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Getcolor from './component/Getcolor'
import Colorbox from './component/Colorbox'
import colorNames  from 'colornames'


function App() {
  const [color, setColor] = useState("")
  const [hexcolor,setHexcolor] = useState("")
  const[isDark,setIsDark] = useState(true)

  const getcolor = (cvalue) => {
       
       
       setColor(cvalue);
       console.log(cvalue)
       setHexcolor(colorNames(cvalue))    
       console.log(colorNames(cvalue))


  }

  return (
    <>
      <div>
        <Colorbox color={color} hexcolor= {hexcolor} isDark ={isDark}/>
        <Getcolor getcolor = {getcolor} isDark ={isDark} setIsDark={setIsDark}/>
      </div>
    </>
  )
}

export default App
