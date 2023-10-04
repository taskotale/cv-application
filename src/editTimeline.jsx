import { useState } from "react"
import { v4 as uuid } from 'uuid';

import TextArea from "./textareaHight"

export default function EditTimelines ({timeline, onChange}) {
  const [newTimeline, setNewTimeline] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const data = timeline
  
  const title = <h2>{data.name}</h2>
  const fields = []
  data.list.map((field, index)=>{
    fields.push(
      <div
      onMouseEnter={()=>setIsHovered(field.key)}
      onMouseLeave={()=>setIsHovered(false)}
        key={field.key}
      >
        {listKeys(field, onChange, index, data.name, isHovered)}
        <button 
              className="btn-delete"
              onClick={()=>{
                onChange('delete', index, data.name)
              }}
            >X
        </button>
                                    
      </div>
      
    )
    if (index !== data.list.length -1) {
      fields.push(<hr key={index} />)
    }
  })
  

  const addNewTimelineForm = (timeline) => {
    const show = []
    for(const key in timeline) {
      if (key !== 'description' && key !== 'responsibilities') {
        if (key !=='key')show.push(
          <div className="form-field" key={key}>
            <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
            <input
              id={key}
              name={key}
              key={key}
              required
            />
          </div>
          
        )
      } else {
        show.push(
          <div className="form-field" key={key}>
            <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
            <textarea
              id={key}
              name={key}
              key={key}
            />
          </div>
        )
      }
    }

    const getObjFromForm = (form) => {
      const length = form.length -1
      let data = {}
      for (let i = 0; i < length ; i++){
          data[form[i].name]= form[i].value
      }
      return data
    }

    const addNewObj = (newObj, parent) => {
      setNewTimeline(false)
      onChange(false, newObj, parent, false)
    }

    const form = (
      <form key={data.name}>
        {show}
        <button
        onClick={(e)=> {
          const inputs = document.forms[0].elements
          const newData = getObjFromForm(inputs)
          newData['key']=uuid()
          e.preventDefault()
          if(newData.name == '') alert('Please enter the name of the degree')
          else addNewObj(newData, data.name)
        }
        }
        >Add Section</button>
      </form>
    )
    return form
  }

  const addNewBtn = (
    <button
    className="btn-add-new-timeline"
      onClick={()=>{
          setNewTimeline(addNewTimelineForm(data.list[0]))
        }
      }
    >
      Add New Section
    </button>
  )

  let show = newTimeline
  if(newTimeline.key !== data.name) {
      show = false
      if (!newTimeline === false) {
        setNewTimeline(show)
      }
  }

  return (
    <div className="edit-timelines-container">
      <div>
        {title}
        {fields}
      </div>
      <div>
        {!show && addNewBtn}
        {show && <hr/>}
        {show}
      </div>
    </div>
  )
}


  
const listKeys = (timeline, change, index, grandparent,isHovered) => {
  const show = []
  let count = 7
  for(const key in timeline) {
    count += 1
    if (key !== 'description' && key !== 'responsibilities') {
      if (key !=='key') show.push(
        <div className="timeline-section" key={key}>
            <label htmlFor={timeline[key]+index}>{key.charAt(0).toUpperCase() + key.slice(1)} {count===1&&(isHovered == timeline.key && <button className="btn-">delete</button>)}</label>
            <input
                id={timeline[key]+index}
                name={key} 
                defaultValue={timeline[key]} 
                onChange={(e)=> {
                    change(key,e.target.value,index, grandparent)
                    }
                }
            />
        </div>
      )
    } else {
      show.push(
        <TextArea
          key={key} 
          section={key}
          data={timeline}
          change={change}
          index={index}
          grandparent={grandparent}
          />
      )
    }
      
  }

  return show
} 