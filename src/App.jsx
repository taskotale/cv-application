/* eslint-disable react/prop-types */
import { useState } from 'react'
// import Card from './makeCards.jsx'
import DisplayCV from './displayCV.jsx'
import Edit from './edit.jsx'
import EditInfo from './editInfo.jsx'
import NavBtns from './nav.jsx'
import './styles/App.css'
import person from './data.jsx'

import { v4 as uuid } from 'uuid';

export default function App() {
  const [fieldToEdit, setFieldToEdit] = useState('info')
  // const [hover, setHover] = useState(false)
  const [text, setText] = useState(person.info)

  const changeInfo = (key, value) => {
    const updated = {
      ...text,
      [key]: value
    }
    person.info = updated
    setText(updated)
  } 

  const changeFieldToEdit = (field, location) => {
    console.log('btn')
    switch(location){
      case 'info':
        setFieldToEdit(person.info)
        break
      case 'timelines':    
        setFieldToEdit((person.timelines.filter((timeline) => timeline.name === field ))[0])
        break
      case 'highlights':
        setFieldToEdit((person.highlights.filter((highlight) => highlight.name === field ))[0])
        break
      default:
        setFieldToEdit('Select field to edit on the left')
    }
  }
  
    return ( 
      <div className='main'> 
          <section className="nav" id='nav' >
            <NavBtns
              person={person}
              setHandle={changeFieldToEdit} 
            />
          </section>
          <section className="edit" id="editCV">
            <EditInfo 
                info = {text}
                change = {changeInfo}
            />
          </section>
          <section className="displayCV" id="displayCV">
              <DisplayCV data={person}></DisplayCV>
          </section>
      </div>
    )
}  


// function EditInfo ({info, change}) {
//   const text = info
//   const show = []
//   for(const key in text) {
//     show.push(
//       <div >
//       <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
//       <input
//         name={key} 
//         value={text[key]} 
//         onChange={(e)=> {
//           change(key,e.target.value)
//         }
//       }
//       />
//     </div>
//     )
//   }

//   return show
// }