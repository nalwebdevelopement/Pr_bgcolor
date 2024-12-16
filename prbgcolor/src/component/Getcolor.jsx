import React from 'react'
import '../App.css'
import { useState } from 'react'



function Getcolor({getcolor,isDark,setIsDark}) {
    const [gcolor, SetGcolor] = useState("")

    const chgcolor = (e) =>
    {
         const value = e.target.value;
         SetGcolor(value);
         console.log(gcolor)
         getcolor(value);
    }
  return (
    <div>
      <form>
            <input 
            autoFocus
            required
            type="text" 
            name="inputcolor" 
            placeholder='Enter color'
            value={gcolor}
            onChange={chgcolor}/>

            <button
            type='button'
            name='clickbut'

            onClick= {() => setIsDark(!isDark)}>Toggle Text Color</button>

      </form>
    </div>
  )
}

export default Getcolor
