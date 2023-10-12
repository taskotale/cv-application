import addNewHighlightBtn from '../supp-func/addNewHighlightBtn'
import '../styles/editNameSection.css'
import { useRef, useState } from 'react'


export default function EditHighlights ({highlight, onChange, changeName, setHandle, setModal}) {

    const text = highlight
    
    // console.log(initialNameState)
    const [newHighlight, setNewHighlight] = useState(false)
    const [showEditName, setShowEditName] = useState(false)

    const inputRef = useRef(null)

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

    const editName = 
        <div key={text.key}>
            <input
                autoFocus
                ref={inputRef}
                id='name-edit'
                className='highlight-name-edit-input'
                defaultValue={text.name === 'New Highlight'? '' : text.name}
                onChange={(e)=>{
                    changeName(text.key, e.target.value)
                }}
                onBlur={()=>{
                    if(text.name === '') {
                        setModal(<><div>Highlight must have a name</div><div>If you really want it without name, please input a space</div></>)
                        document.getElementById('name-edit').focus()}
                    else setShowEditName(false)}}
                />
            <i className="fa-solid fa-pen-to-square"
            onClick={()=>setShowEditName(false)}
            ></i>
        </div> 

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
            <div>
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
            </div>
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

    if(!showEditName) {
        if(text.name == 'New Highlight'){
            setShowEditName(editName)
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
