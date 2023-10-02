

// wont work if I add keys with uuid

import { useState } from "react"

export default function EditInfo ({info, change}) {

  const [textareaHeight, setTextareaHeight] = useState(1)

  const changeHeight = (box) => {
    const height = box.scrollHeight;
    const rowHeight = 15;
    const trows = Math.ceil(height/rowHeight) -1;
    if(trows) {
      setTextareaHeight(trows)
    }
  }

  const descriptionHeight = (key) => {
    if(key !== 'description') return 1
    else return textareaHeight
  }

  const text = info
  const show = []

  for(const key in text) {
    if(key !== 'image')
    {show.push(
      <div className="edit-field" key={key}>
          <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
          <textarea
              rows={descriptionHeight(key)}
              id={key}
              name={key} 
              defaultValue={text[key]}
              onClick={(e)=>changeHeight(e.target)}
              onChange={(e)=> {
                  changeHeight(e.target)
                  change(key,e.target.value)
                  }
              }
          />
      </div>
    )}
    else{
      show.push(
      <div className="edit-field" key={key}>
        <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
        <input 
          type="file"
          accept="image/*"
          id={key}
          name={key}
          onChange={e=>{
            change(key, URL.createObjectURL(...e.target.files))
          }}
          />
      </div>)
    }
  }
  
  return show
  }