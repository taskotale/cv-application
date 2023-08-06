/* eslint-disable react/prop-types */
import { useState } from 'react'
import Card from './makeCards.jsx'
import DisplayCV from './displayCV.jsx'
// import Nav from './nav.jsx'
import './styles/App.css'
import person from './data.jsx'


function App() {
    const [editField, setEditField] = useState(person.info)
    const changeEditField = (field) => {
      switch(field){
        case 'info':
          setEditField(person.info)
          break
        case 'education':
          setEditField(person.edu)
          break
        case 'experience':
          setEditField(person.jobs)
          break
        default:
          setEditField('hello')
      }
     }
    return (
      <div className='main'>
          <section className="nav" id='nav' >
            <Button 
              name='info' 
              setHandle={changeEditField}
              ></Button>
            <Button name='education' setHandle={changeEditField}></Button>
            <Button name='experience' setHandle={changeEditField}></Button>
          </section>
          <section className="edit" id="editCV">
              <Card
                toCard = {editField}
                />
          </section>
          <section className="displayCV" id="displayCV">
              <DisplayCV data={person}></DisplayCV>
          </section>
      </div>
    )
  }
  function Button({name, setHandle}) {
    const handleClick = setHandle
    return (
      <button className='nav-btn' id={name}
      onClick={()=> {
        handleClick(name)
      }}
      >{name}</button>
    )
  } 
  
  export default App
  
  