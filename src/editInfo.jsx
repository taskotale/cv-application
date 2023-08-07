import { v4 as uuid } from 'uuid';


export default function EditInfo ({info, change}) {
    const text = info
    const show = []
    for(const key in text) {
      show.push(
        <div>
            <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
            <input
                name={key} 
                value={text[key]} 
                onChange={(e)=> {
                    change(key,e.target.value)
                    }
                }
            />
        </div>
      )
    }
  
    return show
  }