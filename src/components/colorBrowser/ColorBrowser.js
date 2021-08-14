import React,  { useState } from "react"
import ColorSlider from '../slider/ColorSlider'
import ColorOutput from '../output/ColorOutput'



export default function ColorBrowser() {
    const [colors, setColors] = useState({
   red: 55, green: 150, blue: 25})

   function updateColors(colorName, value){
       setColors({...colors, [colorName]: value})
   }

    return (
        <div>
            <ColorSlider name="red" value={colors.red} updateColors={updateColors}/>
            <ColorSlider name="blue" value={colors.blue} updateColors={updateColors}/>
            <ColorSlider name="green" value={colors.green}updateColors={updateColors}/>
            <ColorOutput colors={colors}/>
        </div>
    )
}

// when you need a string to become a variable like [colorsName] on line 11 you have to use bracket notation