import React from 'react'
import { useState } from 'react'

import '../App.css'

function colorbox({color,hexcolor,isDark}) {

  return (
    <div>
      <section className="colorbox" style={{backgroundColor: color, color:isDark?"#000" :"#FFF"}} >
       <p> {color?color:"Empty" }</p>
       <p> {hexcolor?hexcolor:"null"}</p>

      </section>
    </div>
  )
}

export default colorbox
