import { v4 as uuid } from "uuid"
import DatePick from "../components/DatePick"
import TextArea from "../components/TextareaHight"
import deleteConfirm from "../components/DeleteConfirm"

export default function listKeys (timeline, change, index, grandparent, setModal) {
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
                      if (e.target.value === '' && (key === 'name' || key === 'position')) {setModal(`This field can't be empty`)}
                      else change(key,e.target.value,index, grandparent)
                      }
                  }
              />
          </div>
        )
      }  
    }
    show.push(
      <div className="btn-delete-wrap">
        <button 
              key={uuid()}
              className="btn-delete"
              onClick={()=>{
                deleteConfirm(setModal,change,'delete', index, grandparent)
              }}
            ><i className="fa-solid fa-trash"></i>
        </button>
      </div>

    )
    return show
  } 