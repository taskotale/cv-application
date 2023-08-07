import { v4 as uuid } from 'uuid';

// wont work if I add keys with uuid

export default function EditInfo ({info, change}) {
    const text = info
    const show = []
    for(const key in text) {
      show.push(
        <div key={key}>
            <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
            <input
                id={key}
                name={key} 
                defaultValue={text[key]} 
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