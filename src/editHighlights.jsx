import addNewHighlightBtn from './addNewHighlightBtn'
import './styles/editNameSection.css'
import { useState } from 'react'


export default function EditHighlights ({highlight, onChange, changeName, setHandle}) {
    const [newHighlight, setNewHighlight] = useState(false)
    const [showEditName, setShowEditName] = useState(false)
    
    const text = highlight
    if(!text) {
        return (
            <div>
                <h4>You have no highlights</h4>
                <button
                    onClick={()=> {
                        addNewHighlightBtn(setHandle)
                        }
                    }
                >Add a highlight</button>
            </div>
        )
    }
    const title = <>
                    <div
                        className='highlight-name'
                        onClick={()=>showEditName === false ? setShowEditName(editName()): setShowEditName(false)}
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

    let showNameEdit = showEditName
    if(showEditName.key !== text.key) {
        showNameEdit = false
        if (!showEditName === false) {
            setShowEditName(false)
            }
        }

    const fields = []
    text.list.map((field, index) => {
        fields.push(
            <>
                <input
                    id={field}
                    name={field} 
                    value={field}
                    key={index}
                    onChange={(e)=> {
                        setShowEditName(showEditName)
                        onChange(text, e.target.value, index)
                        }
                    }
                />
                <button
                    onClick={()=>{
                        setShowEditName(showEditName)
                        onChange(text, '', index)
                    }}
                    >X
                </button>
            </>
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
