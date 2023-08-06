/* eslint-disable react/prop-types */
import { useState } from 'react'
// import Card from './makeCards.jsx'
import DisplayCV from './displayCV.jsx'
import Edit from './edit.jsx'
import NavBtns from './nav.jsx'
import './styles/App.css'
import person from './data.jsx'

// import { v4 as uuid } from 'uuid';

export default function App() {
    const [editField, setEditField] = useState(person.info)
    const changeEditField = (field, location) => {
      switch(location){
        case 'info':
          setEditField(person.info)
          break
        case 'timelines':
          setEditField((person.timelines.filter((timeline) => timeline.name === field ))[0])
          break
        case 'highlights':
          setEditField((person.highlights.filter((highlight) => highlight.name === field ))[0])
          break
        default:
          setEditField('Select field to edit on the left')
      }
    }
    return (
      <div className='main'>
          <section className="nav" id='nav' >
            <NavBtns
              person={person}
              setHandle={changeEditField} 
            />
          </section>
          <section className="edit" id="editCV">
              <Edit
                toEdit= {editField} 
              />
          </section>
          <section className="displayCV" id="displayCV">
              <DisplayCV data={person}></DisplayCV>
          </section>
      </div>
    )
  }  



  