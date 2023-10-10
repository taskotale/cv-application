import { useState } from 'react'
import DisplayCV from './displayCV.jsx'
import EditHighlights from './editHighlights.jsx'
import EditInfo from './editInfo.jsx'
import EditTimelines from './editTimeline.jsx'
import NavBtns from './nav.jsx'
import PDFGenerator from './pdfGenerator.jsx'
import person from './data.jsx'
import PickColorScheme from './editColorScheme.jsx'
import './styles/App.css'
import { isMobile } from 'react-device-detect'
import { useSwipeable } from 'react-swipeable'



export default function App() {
  const [fieldToEdit, setFieldToEdit] = useState(['info'])
  const [editInfo, setEditInfo] = useState(person.info)
  const [editTimeline, setEditTimeline] = useState(person.timelines[0])
  const [editHighlights, setEditHighlights] = useState(person.highlights)
  const [showPdf, setShowPdf] = useState(false)
  const [colorScheme, setColorScheme] = useState(person.colorScheme)

  const [swap, setSwap] = useState('nav')

  const handleShowPdf = () => setShowPdf(!showPdf)

  const swipeHandler = useSwipeable({
    onSwipedLeft: () => setSwap('edit'),
    onSwipedRight: () => setSwap('nav')
  })
  
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
    if(key === 'delete') {
      let temp = person.timelines.find(timeline=>timeline.name === parent)
      temp.list.splice(value,1)
      newTimeline = temp
    }
    else if(grandparent){
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
  
  const changeHighlightName = (key, newName) => {
    const nameToUpdate = person.highlights.find(highlight=>highlight.key === key)
    nameToUpdate.name = newName;
    setEditHighlights({
      ...nameToUpdate,
      name: newName,
    })
    changeFieldToEdit(nameToUpdate.key, 'highlights')
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
    console.log(newHighlight)
    setEditHighlights(newHighlight)
  }
  
  const changeFieldToEdit = (field, location) => {
    if (location === 'timelines') {
      const newT = person[location].find((timeline) => timeline.key === field)
      setEditTimeline(newT)
    }
    if (location === 'highlights') {
      const newH = person[location].find((highlight) => highlight.key === field)
      setEditHighlights(newH)
    }
    setFieldToEdit([location, field])
  }

    return (
      <>
      {showPdf && <PDFGenerator colorScheme={colorScheme} handleShowPdf={handleShowPdf}/>}
      {!showPdf &&
        <div className='main' id='main' {...swipeHandler}> 
            {swap==='nav' && <section className="nav" id='nav'>
              <NavBtns
                person={person}
                setHandle={changeFieldToEdit}
              />
              <div>
                <button className='btn-pdf' onClick={handleShowPdf}>Look PDF</button> 
              </div>
            </section>
            }
            {swap==='edit'&&<section className="edit" id="editCV">
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
            </section>}
            {!isMobile && <section className="displayCV" id="displayCV">
                <DisplayCV data={person}></DisplayCV>
            </section>}
        </div>
      }
    </>
    )
}  

