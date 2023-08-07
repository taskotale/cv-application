export default function EditTimelines ({timeline, onChange}) {
  console.log(timeline)
  const text = timeline
    // const timeline = timeline
    const title = <h2>{text.name}</h2>
    const fields = []
    text.list.map((field, index)=>{
      fields.push(
        listKeys(field, onChange, index, text.name)
      )
      if (index !== text.list.length -1) {
        fields.push(<hr key={index} />)
      }
    })
    return (
      <div>
        {title}
        {fields}
      </div>
    )
  }
  
  const listKeys = (timeline, change, index, grandparent) => {
    const show = []
    for(const key in timeline) {
      show.push(
        <div key={key}>
            <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
            <input
                id={key}
                name={key} 
                defaultValue={timeline[key]} 
                onChange={(e)=> {
                    change(key,e.target.value,index, grandparent)
                    }
                }
            />
        </div>
      )
    }
    return show
  } 