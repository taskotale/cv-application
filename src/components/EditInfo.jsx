// import { useState } from "react"
import TextArea from "./TextareaHight";


export default function EditInfo ({info, change}) {

  const data = info
  const show = []

  for(const key in data) {
    if(key !== 'image' && key !== 'description'){
      show.push(
      <div className="edit-field" key={key}>
          <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
          <input
              id={key}
              name={key} 
              defaultValue={data[key]}
              onChange={(e)=> {
                  change(key,e.target.value)
                  }
              }
          />
      </div>
    )}
    else if (key === 'description') {
      show.push(
        <TextArea 
          key={key}
          section={key}
          data={data}
          change={change}
        />
      )
    }
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