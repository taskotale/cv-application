import { v4 as uuid } from 'uuid';
import addHighlight from '../addNewHighlight.jsx'
import person from './data.jsx'

const addNewHighlightBtn = (addToNav) => {
  person.highlights.push(addHighlight('New Highlight', [''], uuid()))
  addToNav('New Highlight','highlights')
}

export default function NavBtns({person, setHandle,addToNav}) {
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
        console.log(highlight.key)
        return (
          <div
            key={highlight.name}
          >
          <Button
          key={highlight.key}
          name={highlight.name}
          location={'highlights'}
          setHandle={setHandle}
          />
          <button
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
        addNewHighlightBtn(addToNav)
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