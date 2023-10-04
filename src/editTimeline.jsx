import { useState } from "react"
import TextArea from "./textareaHight"

export default function EditTimelines ({timeline, onChange}) {
  const [newTimeline, setNewTimeline] = useState(false)

  const text = timeline
  
  const title = <h2>{text.name}</h2>
  const fields = []
  text.list.map((field, index)=>{
    fields.push(
      listKeys(field, onChange, index, text.name)
    )
    if (index !== text.list.length -1) {
      fields.push(<hr key={index} />)
    }
  })

  const addNewTimelineForm = (timeline) => {
    const show = []
    for(const key in timeline) {
      console.log(timeline)
      show.push(
        <div className="form-field" key={key}>
          <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
          <input
            id={key}
            name={key}
            key={key}
          />
        </div>
      )
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
      <form key={text.name}>
        {show}
        <button
        onClick={(e)=> {
          const inputs = document.forms[0].elements
          const newData = getObjFromForm(inputs)
          console.log(text.name)
          e.preventDefault()
          addNewObj(newData, text.name)
        }
        }
        >Add Section</button>
      </form>
    )
    return form
  }

  const addNewBtn = (
    <button
      onClick={()=>setNewTimeline(addNewTimelineForm(text.list[0]))}
    >
      Add Section
    </button>
  )

  let show = newTimeline
  if(newTimeline.key !== text.name) {
      show = false
      if (!newTimeline === false) {
        setNewTimeline(show)
      }
  }

  return (
    <div>
      <div>
        {title}
        {fields}
      </div>
      <div>
        {addNewBtn}
        {show}
      </div>
    </div>
  )
}


  
const listKeys = (timeline, change, index, grandparent) => {
  const show = []
  for(const key in timeline) {
    console.log(timeline[key]+index)
    if (key !== 'description' && key !== 'responsibilities') {
      show.push(
        <div className="timeline-section" key={key}>
            <label htmlFor={timeline[key]+index}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
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