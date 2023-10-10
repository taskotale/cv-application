import { useState } from "react"
import { v4 as uuid } from 'uuid';
import ModalAlert from "./modalAlert";
import listKeys from "./listTimelineKeys";
import addNewTimelineForm from "./addTimelineForm";


export default function EditTimelines ({timeline, onChange}) {
  const [newTimeline, setNewTimeline] = useState(false)
  const [accordion, setAccordion] = useState(false)
  const [modal, setModal] = useState(false)
  
  const data = timeline
  
  const title = <h2>{data.name}</h2>
  const fields = []
  data.list.map((field, index)=>{
    fields.push(
      <div key={field.key} className="accordion-section">
      <div key={uuid()} className="accordion-collapsed"
        onClick={()=>accordion!==field.key?setAccordion(field.key):setAccordion(false)}>
        <div key={uuid()}>{field[Object.keys(field)[0]]}</div>
        <div key={uuid()}>{accordion===field.key?<i className="fa-solid fa-down-left-and-up-right-to-center"></i> : <i className="fa-solid fa-up-right-and-down-left-from-center"></i> }</div>
      </div>
      {accordion === field.key && <div
        className='accordion-element'
        key={field.key}
      >
        <hr style={{height:'1px'}}/>
        {listKeys(field, onChange, index, data.name, setModal)}                   
      </div>}
      </div>
      
    )
    if (index !== data.list.length -1) {
      fields.push(<hr key={index} />)
    }
  })
  
  const addNewBtn = (
    <div className="add-new-btn-container">
      <button
      className="btn-add-new-timeline"
        onClick={()=>{
            setAccordion(false)
            setNewTimeline(addNewTimelineForm(setNewTimeline, onChange, setModal, data))
          }
        }
      >
        Add New Section
      </button>
    </div>
  )

  let show = newTimeline
  if(newTimeline.key !== data.name) {
      show = false
      if (!newTimeline === false) {
        setNewTimeline(show)
      }
  }

  return (
    <>
    {modal&&<ModalAlert closeModal={setModal} textToShow={modal}/>}
    <div className="edit-timelines-container">
      <div>
        {title}
        {fields}
      </div>
      <div>
        {!show && addNewBtn}
        {show && <hr/>}
        {show}
      </div>
    </div>
    </>
  )
}
