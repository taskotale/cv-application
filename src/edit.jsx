/* eslint-disable react/prop-types */
import { v4 as uuid } from 'uuid';
// import { useState } from 'react'


export default function Edit ({toEdit, onChange}) {
    const make = onChange
    const editCard = (key, obj) => {
      let keyCap = key.charAt(0).toUpperCase() + key.slice(1);
      const keyId = `${keyCap}-${obj.key}`  
      return (
              <li key={keyId} >
                  <strong>{keyCap}</strong>:
                  <input 
                  type="text" 
                  value={obj[key]}
                  onChange={(e) => {
                    obj[key] = e.target.value
                    // console.log(obj.key)
                    make(obj, key, e.target.value)
                }}
                  />
              </li>
              )
    }
      
    function findKeys (obj) {
        const temp = []
        for (const key in obj) {
            temp.push(editCard(key, obj))
        }
        return (
            <div className="card-item" key={uuid()}>{temp}</div>
        )
    } 

    const list = []
    if ('list' in toEdit) {
        toEdit.list.map((item)=> {
        if (typeof(item) === typeof('')) {
            list.push(
            <li key={uuid()} >
                <input 
                    type="text"
                    value={item}
                    onChange={(e) => {
                        console.log(e.target.value)
                        console.log(item)
                        console.log(e.target)
                    }}
                />
            </li>)
        }
        else if (typeof(item) === typeof({})) list.push(findKeys(item))
        else list.push('something went wrong (Error 23)')
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

