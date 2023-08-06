import { v4 as uuid } from 'uuid';


export default function NavBtns({person, setHandle}) {
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
          <Button
          key={uuid()}
          name={highlight.name}
          location={'highlights'}
          setHandle={setHandle}
          />
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