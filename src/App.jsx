/* eslint-disable react/prop-types */
import { useState } from 'react'
// import Card from './makeCards.jsx'
import DisplayCV from './displayCV.jsx'
import EditHighlights from './editHighlights.jsx'
import EditInfo from './editInfo.jsx'
import EditTimelines from './editTimeline.jsx'
import NavBtns from './nav.jsx'
import './styles/App.css'
import person from './data.jsx'

import { flushSync } from 'react-dom';



export default function App() {
  const [fieldToEdit, setFieldToEdit] = useState(['info'])
  // const [hover, setHover] = useState(false)
  const [editInfo, setEditInfo] = useState(person.info)
  const [editTimeline, setEditTimeline] = useState(person.timelines[0])
  const [editHighlights, setEditHighlights] = useState(person.highlights)

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

  const changeHighlight = (highlight, index, value) => {
    const newList = highlight.list
    newList[index] = value
    const newHighlight = {
      name: highlight.name,
      list: newList
    }
    setEditHighlights(newHighlight)
  }
  
  const changeFieldToEdit = (field, location) => {
    if (location === 'timelines') {
      const newT = person[location].find((timeline) => timeline.name === field)
      setEditTimeline(newT)
    }
    if (location === 'highlights') {
      const newH = person[location].find((highlight) => highlight.name === field)
      setEditHighlights(newH)
    }
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
              timeline = {editTimeline}
              onChange= {changeTimeline} 
            />: <EditHighlights
              highlight = {editHighlights}
              onChange = {changeHighlight}
            
            />     
            }
            
          </section>
          <section className="displayCV" id="displayCV">
              <DisplayCV data={person}></DisplayCV>
          </section>
      </div>
    )
}  

