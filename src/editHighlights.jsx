import './styles/editNameSection.css'
import { useState } from 'react'

export default function EditHighlights ({highlight, onChange, changeName}) {
    const [newHighlight, setNewHighlight] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    
    

    const text = highlight

    const title = <>
                    <div
                    className='highlight-name'
                    onClick={()=>setShowEdit(!showEdit)}
                    >{text.name}
                        <div className='name-hover-message'>Click to edit</div>
                    </div>
                    <div
                    className= {showEdit?'highlight-name-edit':'highlight-name-edit hide'}
                    >
                        <input
                        className='highlight-name-edit-input'
                        defaultValue={text.name}
                        onChange={(e)=>{
                            changeName(text.name, e.target.value)
                        }}
                        >
                        </input>
                    </div>
                </>

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
    
    const addNewHighlight = (text) => {
        return(
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
    }

    const addNewBtn = (
        <button
            onClick={()=>{
                setNewHighlight(addNewHighlight(text))
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
