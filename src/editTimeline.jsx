import { useState } from "react"
import { v4 as uuid } from 'uuid';
import formatDate from "./formatDate";
import TextArea from "./textareaHight"
import DatePick from "./DatePick";

export default function EditTimelines ({timeline, onChange}) {
  const [newTimeline, setNewTimeline] = useState(false)
  const [accordion, setAccordion] = useState(false)
  
  const data = timeline
  
  const title = <h2>{data.name}</h2>
  const fields = []
  data.list.map((field, index)=>{
    fields.push(
      <div key={field.key} className="accordion-section">
      <div key={uuid()} className="accordion-collapsed"
        onClick={()=>accordion!==field.key?setAccordion(field.key):setAccordion(false)}>
        <div key={uuid()}>{field[Object.keys(field)[0]]}</div>
        <div key={uuid()}>{accordion===field.key?<i className="fa-solid fa-down-left-and-up-right-to-center"></i> : <i className="fa-solid fa-up-right-and-down-left-from-center"></i> }</div>
      </div>
      {accordion === field.key && <div
        className='accordion-element'
        key={field.key}
      >
        <hr style={{height:'1px'}}/>
        {listKeys(field, onChange, index, data.name)}                   
      </div>}
      </div>
      
    )
    if (index !== data.list.length -1) {
      fields.push(<hr key={index} />)
    }
  })
  

  const addNewTimelineForm = (timeline) => {
    const show = []
    for(const key in timeline) {
      if (key === 'description' || key === 'responsibilities') {
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
      } else if (key === 'start' || key === 'end') {
          show.push(<div className="form-field" key={key}>
            <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
            <DatePick 
              section={key}
              timeline={timeline}
            />
          </div>)
      } else {
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
      <form className='add-timeline-form' key={data.name}>
        {show}
        <button
        className="btn-add-new-timeline"
        onClick={(e)=> {
          const inputs = document.forms[0].elements
          const newData = getObjFromForm(inputs)
          console.log(newData)
          newData['key']=uuid()
          e.preventDefault()
          if(newData.name === '' || newData.position === '') alert('Please enter the name/position')
          else addNewObj(newData, data.name)
        }
        }
        >Add Section</button>
      </form>
    )
    return form
  }

  const addNewBtn = (
    <div className="add-new-btn-container">
      <button
      className="btn-add-new-timeline"
        onClick={()=>{
            setAccordion(false)
            setNewTimeline(addNewTimelineForm(data.template))
          }
        }
      >
        Add New Section
      </button>
    </div>
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


  
const listKeys = (timeline, change, index, grandparent) => {
  const show = []
  for(const key in timeline) {
    if (key === 'description' || key === 'responsibilities') {
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
    } else if (key === 'start' || key === 'end') {
      show.push(
      <div className="form-field" key={key}>
        <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
        <DatePick 
          section={key}
          timeline={timeline}
          index={index}
          change={change}
          grandparent={grandparent}
          />
      </div>
      )
    } else {
      if (key !=='key') show.push(
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
    }  
  }
  show.push(
    <button 
            key={uuid()}
            className="btn-delete"
            onClick={()=>{
              change('delete', index, grandparent)
            }}
          ><i className="fa-solid fa-trash"></i>
      </button>
      
  )

  return show
} 