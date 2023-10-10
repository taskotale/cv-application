import addNewHighlightBtn from './addNewHighlightBtn'
import './styles/editNameSection.css'
import { useRef, useState } from 'react'
import { v4 as uuid } from 'uuid'


export default function EditHighlights ({highlight, onChange, changeName, setHandle}) {

    const text = highlight
    const inputRef = useRef(null)
    const editName = (
        <div key={text.key}>
            <input
                autoFocus
                ref={inputRef}
                id='name-edit'
                className='highlight-name-edit-input'
                defaultValue={text.name}
                onChange={(e)=>{
                    changeName(text.key, e.target.value)
                }}
                >
            </input>
            <i className="fa-solid fa-pen-to-square"
            onClick={()=>setShowEditName(false)}
            ></i>
        </div> 
    )
    const initialNameState = text.name === 'New Highlight'? editName : false

    const [newHighlight, setNewHighlight] = useState(false)
    const [showEditName, setShowEditName] = useState(initialNameState)

    
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
                        key={text.name}
                        className='highlight-name'
                        onClick={()=>{
                            showEditName === false ? setShowEditName(editName): setShowEditName(false)
                        }
                        }
                        >{text.name}
                        <div className='name-hover-message'>Click to edit</div>
                        <i className="fa-solid fa-pen-to-square"></i>
                    </div>
                </>
    

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
        <div >
            <div >
                {!showNameEdit && title}
                {showNameEdit}
            </div>
            {fields}
            <div >
                {show}
                {addNewBtn}
            </div>
        </div>
    )
}
