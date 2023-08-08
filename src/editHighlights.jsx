import { useState } from 'react'

export default function EditHighlights ({highlight, onChange}) {
    const [newHighlight, setNewHighlight] = useState(false)

    const text = highlight

    const title = <h2>{text.name}</h2>
    const fields = []
    text.list.map((field, index) => {
        fields.push(
            <input
                id={field}
                name={field} 
                value={field}
                key={index} 
                onChange={(e)=> {
                    onChange(text, e.target.value, index)
                    }
                }
            />
        )
    })

    const addNewField = (value) => {
        setNewHighlight(false)
        onChange(text, value)
    }
    
    const addNewBtn = (
        <button
            onClick={()=>{
                const addNewHighlight = (
                    <form key={text.name}>
                        <input
                            id='inputAdd'
                            placeholder={"Type to add a new "+text.name}
                        ></input>
                        <button
                            onClick={()=>{
                                addNewField(document.getElementById('inputAdd').value)
                            }}
                        >Add</button>
                    </form>
                    )
                setNewHighlight(addNewHighlight)
            }}
            >Add more {text.name}
        </button>
    )

    let show = newHighlight
    if(newHighlight.key !== text.name) {
        show = false
        if (!newHighlight === false) {
            setNewHighlight(show)
        }
    }
        
    return (
        <div>
            {title}
            {fields}
            <div>
                {show}
                {addNewBtn}
            </div>
        </div>
    )
}
