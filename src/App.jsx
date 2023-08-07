/* eslint-disable react/prop-types */
import { useState } from 'react'
// import Card from './makeCards.jsx'
import DisplayCV from './displayCV.jsx'
import EditInfo from './editInfo.jsx'
import EditTimelines from './editTimeline.jsx'
import NavBtns from './nav.jsx'
import './styles/App.css'
import person from './data.jsx'

import { v4 as uuid } from 'uuid';

export default function App() {
  const [fieldToEdit, setFieldToEdit] = useState(['info'])
  // const [hover, setHover] = useState(false)
  const [editInfo, setEditInfo] = useState(person.info)
  const [editTimeline, setEditTimeline] = useState(null)

  const changeInfo = (key, value) => {
    const updated = {
      ...editInfo,
      [key]: value
    }
    person.info = updated
    setEditInfo(updated)
  }

  const changeTimeline = (key, value, parent, grandparent) => {
      const childToChange = editTimeline.list[parent]
      const updated = {
        ...childToChange,
        [key]:value
      }
      let newTimeline = {}
      person.timelines.map((timeline)=> {
        if(timeline.name === grandparent) {
          timeline.list[parent] = updated
          newTimeline = timeline
        }
      })
      setEditTimeline({...newTimeline})
  }
  
  const changeFieldToEdit = (field, location) => {
    
    setFieldToEdit([location, field])
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
            {fieldToEdit[0]==='info'?
            <EditInfo 
                info = {editInfo}
                change = {changeInfo}
            />:
            fieldToEdit[0]==='timelines'?
            <EditTimelines
              timeline = {person.timelines.find((timeline) => timeline.name === fieldToEdit[1])}
              onChange= {changeTimeline} 
            />: console.log('hey')
            
            
            }
            
          </section>
          <section className="displayCV" id="displayCV">
              <DisplayCV data={person}></DisplayCV>
          </section>
      </div>
    )
}  
