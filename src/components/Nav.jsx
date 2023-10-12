import '../styles/nav.css'

import { v4 as uuid } from 'uuid';import { useState } from 'react';

import addNewHighlightBtn from '../supp-func/addNewHighlightBtn.jsx';
import Button from './NabBtns.jsx';
import clearPerson from '../supp-func/cleanPerson.jsx'
import deleteHighlight from '../supp-func/deleteHighlight.jsx';


export default function NavBtns({person, setHandle, handleShowPdf, setModal, setFieldToEdit}) {
  const [isHovered, setIsHovered] = useState(false)

  const infoBtn =  (
    <Button
    key={uuid()}
    name='Change Info'
    location='info' 
    setHandle={setHandle}
    />
    )
    const timelineBtns = person.timelines.map((timeline)=>{
      return (
        <Button
        key={uuid()}
        id={timeline.key}
        name={timeline.name}
        location={'timelines'}
        setHandle={setHandle}
        />
        )
      })
      
    const highlightsBtns = person.highlights.map((highlight)=>{
      if(highlight) {
      return (
        <div
          className='nav-btn'
          key={highlight.key}
          onMouseEnter={()=>setIsHovered(highlight.key)}
          onMouseLeave={()=>setIsHovered(false)}
        >
        <Button
        key={uuid()}
        id={highlight.key}
        name={highlight.name}
        location={'highlights'}
        setHandle={setHandle}     
        />
        {isHovered===highlight.key &&<button
          onClick={()=>deleteHighlight(highlight.key, setHandle)}
        >X</button>}
        </div>
        )
      }
    }) 
        return (
          <>
          <div className='nav-section'>
            <i>Info</i>
            {infoBtn}
            </div>
          <div className='nav-section'>
            <i>Timeline</i>
            {timelineBtns}
          </div>
          <div className='nav-section'>
            <i>Highlights</i>
            {highlightsBtns}
          </div>
            <button className='nav-section'
            onClick={()=> {
              addNewHighlightBtn(setHandle)
            }
            }
            >Add new</button>
          <div className='nav-section'>
            <i>Color Scheme</i>
            <button className='change-colors' 
                    onClick={()=>{setHandle('color', null)}}>
                      Pick colors
            </button>
          </div>
          <div>
            <button className='btn-pdf' onClick={handleShowPdf}>Look PDF</button> 
          </div>
          <button onClick={()=>clearPerson(person, setModal, setFieldToEdit)}>Start New CV</button>
    </>
  )
}