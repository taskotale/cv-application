import DatePick from "./DatePick"
import { v4 as uuid } from "uuid"

export default function addNewTimelineForm (setNewTimeline, onChange, setModal, data) {
    const show = []
    for(const key in data.template) {
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
              timeline={data.template}
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
          newData['key']=uuid()
          e.preventDefault()
          if(newData.name === '') setModal('Please input at least the name')
          else if(newData.position === '') setModal('Please input at least the position')
          else addNewObj(newData, data.name)
        }
        }
        >Add Section</button>
      </form>
    )
    return form
  }