import { useState } from "react"

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
      show.push(
        <div className="formField" key={key}>
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
      {title}
      {fields}
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
    show.push(
      <div key={key}>
          <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
          <input
              id={key}
              name={key} 
              defaultValue={timeline[key]} 
              onChange={(e)=> {
                  change(key,e.target.value,index, grandparent)
                  }
              }
          />
      </div>
    )
  }
  return show
} 