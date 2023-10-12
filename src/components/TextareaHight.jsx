import { useRef, useState } from "react"

export default function TextArea ({section, data, change, index, grandparent}) {
    const [textareaHeight, setTextareaHeight] = useState(1)

    const collapseTextAre = useRef(null)

    const changeHeight = (box) => {
        if(!box) setTextareaHeight(1)
        const height = box.scrollHeight;
        const rowHeight = 15;
        const rows = Math.ceil(height/rowHeight) -1;
        if(rows) {
            rows < 17? setTextareaHeight(rows) : setTextareaHeight(17)
        }
      }
    return (
        <div className="edit-field" key={section}>
        <label htmlFor={data[section]}>{section.charAt(0).toUpperCase() + section.slice(1)}</label>
        <textarea
            ref={collapseTextAre}
            rows={textareaHeight}
            id={data[section]}
            name={section} 
            defaultValue={data[section]}
            onChange={(e)=> {
                changeHeight(e.target)
                if(!index && !grandparent)change(section,e.target.value)
                else change(section, e.target.value, index, grandparent)
                }
            }
            onFocus={(e)=>changeHeight(e.target)}
            onBlur={()=>changeHeight(false)}
        />
    </div>
    )
    

}