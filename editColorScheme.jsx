import { useState } from "react"
import { HexColorPicker } from "react-colorful"

export default function PickColorScheme({colorScheme, changeColors}){
    const [color, setColor] = useState(null)

    const colors = colorScheme
    console.log(colors)
    

    return (
        <div>
            <div>
                <i>Main Color</i>
                <button style={{ backgroundColor: colors.main}}>Change</button>
            </div>
            <div>
                <i>Second Color</i>
                <button style={{ backgroundColor: colors.alternative}}>Change</button>
            </div>
            <div>
                <i>Accent Color</i>
                <button 
                onClick={()=>{
                    const newColors = {
                        ...colors, 
                        accent: 'red'
                    }
                    const onDisplayColor = document.getElementById('root')
                    onDisplayColor.style.setProperty('--accentColor','red')
                    changeColors(newColors)
                }
                }
                style={{ backgroundColor: colors.accent}}>Change</button>
            </div>
        </div>
    )
}