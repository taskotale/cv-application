import { v4 as uuid } from 'uuid';
import addHighlight from './addNewHighlight.jsx'
import person from './data.jsx'
import { useState } from 'react';

const addNewHighlightBtn = (addToNav) => {
  person.highlights.push(addHighlight('New Highlight', [''], uuid()))
  addToNav('New Highlight','highlights')
}

const deleteHighlight = (arg) => {
  let toDelete = person.highlights.find(highlight=>highlight.key===arg)
  let newHighlight = person.highlights.filter(highlight => highlight !== toDelete)
  person.highlights = newHighlight
}

export default function NavBtns({person, setHandle}) {
  const [isHovered, setIsHovered] = useState(false)
  const infoBtn =  (
    <Button
    key={uuid()}
    name='Info'
    location='info' 
    setHandle={setHandle}
    />
    )
    const timelineBtns = person.timelines.map((timeline)=>{
      return (
        <Button
        key={uuid()}
        name={timeline.name}
        location={'timelines'}
        setHandle={setHandle}
        />
        )
      })
      
    const highlightsBtns = person.highlights.map((highlight)=>{
      return (
        <div
          key={highlight.name}
          onMouseEnter={(e)=>setIsHovered(e.target.lastChild.hidden=false)}
          onMouseLeave={(e)=>setIsHovered(e.target.lastChild.hidden=true)}
        >
        <Button
        key={uuid()}
        name={highlight.name}
        location={'highlights'}
        setHandle={setHandle}     
        />
        <button
        hidden={true}
        onClick={()=>deleteHighlight(highlight.key)}
        >X</button>
        </div>
        )
      })
        
        return (
          <>
    <div>{infoBtn}</div>
    <div>
      <i>Timeline</i>
      {timelineBtns}
    </div>
    <div>
      <i>Highlights</i>
      {highlightsBtns}
      <button
      onClick={()=> {
        addNewHighlightBtn(setHandle)
      }
      }
      >add new</button>
    </div>
    </>
  )


  function Button({name, location, setHandle}) {
    const handleClick = setHandle
    return (
      <button className='nav-btn' id={name} key={uuid()}
      onClick={()=> {
        handleClick(name, location)
      }}
      >{name}</button>
    )
  } 
}