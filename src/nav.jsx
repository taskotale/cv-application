import { v4 as uuid } from 'uuid';
import person from './data.jsx'
import { useState } from 'react';
import addNewHighlightBtn from './addNewHighlightBtn.jsx';
import Button from './nabBtns.jsx';


const deleteHighlight = (key,changeScreen) => {
  let toDelete = person.highlights.find(highlight=>highlight.key===key)
  let newHighlight = person.highlights.filter(highlight => highlight !== toDelete)
  person.highlights = newHighlight
  newHighlight.length >0? changeScreen(person.highlights[0].name,'highlights'): changeScreen(false,'highlights')
}

export default function NavBtns({person, setHandle}) {
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
                <button className='change-colors' onClick={()=>{
                  setHandle('color', null)
                  }}>Pick colors</button>
              </div>
    </>
  )
}