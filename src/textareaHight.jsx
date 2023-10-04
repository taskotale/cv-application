import { useState } from "react"

export default function TextArea ({section, data, change, index, grandparent}) {
    const [textareaHeight, setTextareaHeight] = useState(1)

    const changeHeight = (box) => {
        const height = box.scrollHeight;
        const rowHeight = 15;
        const trows = Math.ceil(height/rowHeight) -1;
        if(trows) {
          setTextareaHeight(trows)
        }
      }
    return (
        <div className="edit-field" key={section}>
        <label htmlFor={data[section]}>{section.charAt(0).toUpperCase() + section.slice(1)}</label>
        <textarea
            rows={textareaHeight}
            id={data[section]}
            name={section} 
            defaultValue={data[section]}
            onClick={(e)=>changeHeight(e.target)}
            onChange={(e)=> {
                changeHeight(e.target)
                if(!index && !grandparent)change(section,e.target.value)
                else change(section, e.target.value, index, grandparent)
                }
            }
        />
    </div>
    )
    

}