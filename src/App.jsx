import { useState } from 'react'
import Card from './makeCards.jsx'
import Nav from './nav.jsx'
import './styles/App.css'


const info = {
  'Name' : 'tah',
  'Last Name' : 'muj',
}
const edu = {
  School : 'ul',
  Year : '2022',
}

const addJob = (name ='job', posit='position', year = 'year') => {
  return {
    Job: name,
    Position: posit,
    Year: year
  }
}
const jobs = [addJob('a', 'z', 1), addJob('b','y',2), addJob()]


function App() {
    return (
      <div className='main'>
          <section className="nav" id='nav' >
            <Nav></Nav>
          </section>
          <section className="edit" id="editCV">
              <Card
                toCard = {jobs}
              />
          </section>
          <section className="displayCV" id="displayCV">
              <Card 
                toCard = {info}
                />
              <Card
                toCard = {edu}
                />
              <Card
                toCard = {jobs}
                />
          </section>
      </div>
    )
}

export default App

