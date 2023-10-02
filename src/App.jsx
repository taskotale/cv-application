/* eslint-disable react/prop-types */
import { useState } from 'react'
import DisplayCV from './displayCV.jsx'
import EditHighlights from './editHighlights.jsx'
import EditInfo from './editInfo.jsx'
import EditTimelines from './editTimeline.jsx'
import NavBtns from './nav.jsx'
import person from './data.jsx'
import PickColorScheme from '../editColorScheme.jsx'
import './styles/App.css'


import PDFGenerator from './pdfGenerator.jsx'


export default function App() {
  const [fieldToEdit, setFieldToEdit] = useState(['info'])
  // const [hover, setHover] = useState(false)
  const [editInfo, setEditInfo] = useState(person.info)
  const [editTimeline, setEditTimeline] = useState(person.timelines[0])
  const [editHighlights, setEditHighlights] = useState(person.highlights)
  const [showPdf, setShowPdf] = useState(false)
  const [colorScheme, setColorScheme] = useState(person.colorScheme)

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
    nameToUpdate.name = newName;
    setEditHighlights({
      ...nameToUpdate,
      name: newName,
    })
    changeFieldToEdit(newName, 'highlights')
  }

  const changeHighlight = (highlight, value, index) => {
    const newList = highlight.list
    if (index === false) {
      if(value !== '') newList.push(value)
    }
    else {
      value != ''? newList[index] = value : newList.splice(index,1)
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

  const handleShowPdf = () => setShowPdf(!showPdf)

    return (
      <>
      {showPdf && <PDFGenerator colorScheme={colorScheme} handleShowPdf={handleShowPdf}/>}
      {!showPdf &&
        <div className='main' id='main'> 
            <section className="nav" id='nav' >
              <NavBtns
                person={person}
                setHandle={changeFieldToEdit}
              />
              
              <div>
                <button className='btn-pdf' onClick={handleShowPdf}>Look PDF</button> 
              </div>

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
              />:
              fieldToEdit[0] === 'highlights'? 
              <EditHighlights
                highlight = {editHighlights}
                onChange = {changeHighlight}
                changeName ={changeHighlightName}
                setHandle={changeFieldToEdit}
              />:
              <PickColorScheme 
                colorScheme = {colorScheme}
                changeColors = {setColorScheme}
              />   
              }
              
            </section>
            <section className="displayCV" id="displayCV">
                <DisplayCV data={person}></DisplayCV>
            </section>
        </div>
      }
    </>
    )
}  

