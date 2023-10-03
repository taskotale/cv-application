import { useState } from "react"
import { HexColorPicker } from "react-colorful"

export default function PickColorScheme({colorScheme, changeColors}){
    const [showAccentPicker, setShowAccentPicker] = useState(false)
    const [showMainPicker, setShowMainPicker] = useState(false)
    const [showAlternativePicker, setShowAlternativePicker] = useState(false)


    const colors = colorScheme
    
    return (
        <div>
            <div className="color-edit">
                <i>Main Color</i>
                <button
                onClick={()=>{
                    setShowMainPicker(!showMainPicker)
                    setShowAlternativePicker(false)
                    setShowAccentPicker(false)
                }}
                >Change</button>
                <div className="color-sample" 
                        onClick={()=>{
                            setShowMainPicker(!showMainPicker)
                            setShowAlternativePicker(false)
                            setShowAccentPicker(false)
                        }}
                        style={{ backgroundColor: colors.main}}></div>
            </div>
            <div className="color-edit">
                <i>Second Color</i>
                <button 
                onClick={()=>{
                    setShowAlternativePicker(!showAlternativePicker)
                    setShowMainPicker(false)
                    setShowAccentPicker(false)
                }}
                >Change</button>
                <div className="color-sample" onClick={()=>{
                    setShowAlternativePicker(!showAlternativePicker)
                    setShowMainPicker(false)
                    setShowAccentPicker(false)
                }} style={{ backgroundColor: colors.alternative}}></div>
            </div>
            <div className="color-edit">
                <i>Accent Color</i>
                <button
                    onClick={()=>{
                        setShowAlternativePicker(false)
                        setShowMainPicker(false)
                        setShowAccentPicker(!showAccentPicker)
                    }
                    }
                    >Change
                </button>
                <div className="color-sample" 
                        onClick={()=>{
                            setShowAlternativePicker(false)
                            setShowMainPicker(false)
                            setShowAccentPicker(!showAccentPicker)
                        }
                        }
                        style={{ backgroundColor: colors.accent}}></div>
                
            </div>
            {showAccentPicker&&<div className="color-picker">
                    <HexColorPicker color={colors.accent} onChange={(e)=>{
                        const newColors = {
                            ...colors, 
                            accent: e
                        }
                        const onDisplayColor = document.getElementById('root')
                        onDisplayColor.style.setProperty('--accentColor', e)
                        changeColors(newColors)
                        }}/>
                </div>}
                {showAlternativePicker&&<div className="color-picker">
                    <HexColorPicker color={colors.alternative} onChange={(e)=>{
                        const newColors = {
                            ...colors, 
                            alternative: e
                        }
                        const onDisplayColor = document.getElementById('root')
                        onDisplayColor.style.setProperty('--colorOne', e)
                        changeColors(newColors)
                        }}/>
                </div>}
                {showMainPicker&&<div className="color-picker">
                    <HexColorPicker color={colors.main} onChange={(e)=>{
                        const newColors = {
                            ...colors, 
                            main: e
                        }
                        const onDisplayColor = document.getElementById('root')
                        onDisplayColor.style.setProperty('--colorTwo', e)
                        changeColors(newColors)
                        }}/>
                </div>}
        </div>
    )
}