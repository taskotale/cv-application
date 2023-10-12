import './styles/App.css'
import { useState } from 'react'
import { isMobile, useMobileOrientation } from 'react-device-detect'
import { useSwipeable } from 'react-swipeable'

import DisplayCV from './displayCV.jsx'
import EditHighlights from './editHighlights.jsx'
import EditInfo from './editInfo.jsx'
import EditTimelines from './editTimeline.jsx'
import ModalAlert from './modalAlert.jsx'
import NavBtns from './nav.jsx'
import PDFGenerator from './pdfGenerator.jsx'
import PickColorScheme from './editColorScheme.jsx'

import clearPerson from './cleanPerson.jsx'
import person from './data.jsx'
import NewPersonStart from './newPage.jsx'

export default function App() {
  const [fieldToEdit, setFieldToEdit] = useState(['info'])
  const [editInfo, setEditInfo] = useState(person.info)
  const [editTimeline, setEditTimeline] = useState(person.timelines[0])
  const [editHighlights, setEditHighlights] = useState(person.highlights)
  const [showPdf, setShowPdf] = useState(false)
  const [colorScheme, setColorScheme] = useState(person.colorScheme)
  const [modal, setModal] = useState(false)
  const [swap, setSwap] = useState('nav')

  const handleShowPdf = () => setShowPdf(!showPdf)

  const swipeHandler = useSwipeable({
    onSwipedLeft: () => setSwap('edit'),
    onSwipedRight: () => setSwap('nav')
  })
  const { isLandscape } = useMobileOrientation()
  
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
    setSwap('edit')
  }

    return (
      <>
      {modal&&<ModalAlert closeModal={setModal} textToShow={modal}/>}
      {showPdf && <PDFGenerator colorScheme={colorScheme} handleShowPdf={handleShowPdf}/>}
      {!showPdf &&
        <div className='main' id='main' {...swipeHandler}> 
            {(swap==='nav' || !isMobile || isLandscape) && <section className="nav" id='nav'>
              <NavBtns
                person={person}
                setHandle={changeFieldToEdit}
              />
              <div>
                <button className='btn-pdf' onClick={handleShowPdf}>Look PDF</button> 
              </div>
                <button onClick={()=>clearPerson(person, setModal, setFieldToEdit)} >Start New CV</button>
            </section>
            }
            {(swap==='edit' || !isMobile || isLandscape)&&<section className="edit" id="editCV">
              {fieldToEdit[0]==='info'?
              <EditInfo 
                  info = {editInfo}
                  change = {changeInfo}
              />:
              fieldToEdit[0]==='timelines'?
              <EditTimelines
                timeline = {editTimeline}
                onChange= {changeTimeline}
                modal={modal}
                setModal={setModal} 
              />:
              fieldToEdit[0] === 'highlights'? 
              <EditHighlights
                highlight = {editHighlights}
                onChange = {changeHighlight}
                changeName ={changeHighlightName}
                setHandle={changeFieldToEdit}
                setModal={setModal}
              />:
              fieldToEdit[0] === 'new'?
              <NewPersonStart
                setHandle = {setFieldToEdit}
                changeInfo = {changeInfo}
              />
              :
              <PickColorScheme 
                colorScheme = {colorScheme}
                changeColors = {setColorScheme}
              />   
              }
              {(isMobile && !isLandscape) && <i className="fa-solid fa-arrow-left" onClick={()=>setSwap('nav')}></i>}
            </section>}
            {(!isMobile || isLandscape) && <section className="displayCV" id="displayCV">
                <DisplayCV data={person}></DisplayCV>
            </section>}
        </div>
      }
    </>
    )
}  

