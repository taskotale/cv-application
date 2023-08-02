import { useState } from 'react'
import Display from './display.jsx'
import './styles/App.css'


const info = {
  name : 'tah',
  last : 'muj',
}
const edu = {
  school : 'ul',
  year : '2022',
}

const addJob = (name ='job', posit='position', year = 'year') => {
  return {
    job: name,
    posit: posit,
    year: year
  }
}
const jobs = [addJob('a', 'z', 1), addJob('b','y',2), addJob()]


function Button(name) {
  return (
    <button className='nav-btn' id='nav-btn'>{name.name}</button>
  )
}

function Edit () {
  return (
  <div className='edit' id='edit' key={'Edit'}>
      EDIT
  </div>
  )
}



function App() {
    return (
      <div className='main'>
          <section className="nav" id='nav' >
            <Button name={'info'}></Button>
            <Button name={'education'}></Button>
            <Button name={'experience'}></Button>
          </section>
          <section className="edit" id="editCV">
              <Edit></Edit>
          </section>
          <section className="displayCV" id="displayCV">
              <Display 
                info = {info}
                edu = {edu}
                jobs = {jobs}
                >

              </Display>
          </section>
      </div>
    )
}

export default App

