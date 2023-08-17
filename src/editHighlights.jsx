import './styles/editNameSection.css'
import { useState } from 'react'

export default function EditHighlights ({highlight, onChange, changeName}) {
    const [newHighlight, setNewHighlight] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    
    const text = highlight

    const title = <>
                    <div
                        className='highlight-name'
                        onClick={()=>showEdit === false ? setShowEdit(editName()): setShowEdit(false)}
                        >{text.name}
                        <div className='name-hover-message'>Click to edit</div>
                    </div>
                </>

    const editName = () => {
        return (
                <div
                    key={text.key}
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
                )
        }

    let showNameEdit = showEdit
    if(showEdit.key !== text.key) {
        showNameEdit = false
        if (!showEdit === false) {
            setShowEdit(showNameEdit)
            }
        }

    const fields = []
    text.list.map((field, index) => {
        fields.push(
            <input
                id={field}
                name={field} 
                value={field}
                key={index} 
                onChange={(e)=> {
                    setShowEdit(showEdit)
                    onChange(text, e.target.value, index)
                    }
                }
            />
        )
    })

    const addNewField = (value) => {
        setNewHighlight(false)
        onChange(text, value, false)
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
            <div>
                {title}
                {showNameEdit}
            </div>
            {fields}
            <div>
                {show}
                {addNewBtn}
            </div>
        </div>
    )
}
