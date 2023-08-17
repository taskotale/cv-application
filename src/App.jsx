/* eslint-disable react/prop-types */
import { useState } from 'react'
import addHighlight from '../addNewHighlight.jsx'
import DisplayCV from './displayCV.jsx'
import EditHighlights from './editHighlights.jsx'
import EditInfo from './editInfo.jsx'
import EditTimelines from './editTimeline.jsx'
import NavBtns from './nav.jsx'
import './styles/App.css'
import person from './data.jsx'


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
    let newTimeline = {}
    if(grandparent){
      const childToChange = editTimeline.list[parent]
      const updated = {
        ...childToChange,
        [key]:value
      }
      person.timelines.map((timeline)=> {
        if(timeline.name === grandparent) {
          timeline.list[parent] = updated
          newTimeline = timeline
        }
      })
    } else {
      const temp = person.timelines.find(timeline=>timeline.name === parent)
      temp.list.push(value)
      newTimeline = temp
    }
    setEditTimeline({...newTimeline})
  }
  
  const changeHighlightName = (name, newName) => {
    const nameToUpdate = person.highlights.find(highlight=>highlight.name === name)
    nameToUpdate.name = newName
    setEditHighlights({...nameToUpdate})
  }

  const changeHighlight = (highlight, value, index) => {
    const newList = highlight.list
    if (index === false) {
      newList.push(value)
    }
    else {
      newList[index] = value
    }
    const newHighlight = {
      ...highlight,
      list: newList,
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
              addToNav={changeFieldToEdit} 
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
              changeName ={changeHighlightName}
            
            />     
            }
            
          </section>
          <section className="displayCV" id="displayCV">
              <DisplayCV data={person}></DisplayCV>
          </section>
      </div>
    )
}  

