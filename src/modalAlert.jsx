import { useRef } from "react"
import './styles/modalAlert.css'

export default function ModalAlert ({textToShow, closeModal}) {
    const outsideDiv = useRef(null)
    return (
        <div className="modal" onClick={(e)=>{if(!outsideDiv.current.contains(e.target))closeModal(false)}}>
            <div className="modal-window" ref={outsideDiv}>
                <div>{textToShow}</div>
                <button onClick={()=>closeModal(false)} >Back</button>
            </div>
        </div>
    )
}