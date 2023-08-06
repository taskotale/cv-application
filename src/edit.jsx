/* eslint-disable react/prop-types */
import { v4 as uuid } from 'uuid';


export default function Edit ({toEdit}) {
    const list = []
    if ('list' in toEdit) {
      toEdit.list.map((item)=> {
        if (typeof(item) === typeof('')) list.push(<li key={uuid()} >{item}</li>)
        else if (typeof(item) === typeof({})) list.push(findKeys(item))
        else list.push('something went wrong (Error 56)')
         })
    }
    else {
        list.push(findKeys(toEdit))
    }
    return (
        <ul>
          <h2>{toEdit.name}</h2>
          {list}
        </ul>
    )
  }
    
  function findKeys (obj) {
      const temp = []
      for (const key in obj) {
          temp.push(editCard(key, obj[key]))
      }
      return (
          <div className="card-item" key={uuid()}>{temp}</div>
      )
  }
  
  const editCard = (key, value) => {
    key = key.charAt(0).toUpperCase() + key.slice(1);
      const keyId = `${key}-${value}`
          return (
              <li key={keyId} >
                  <strong>{key}</strong>: <i>{value}</i>
              </li>
          )
      }