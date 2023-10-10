
export default function DatePick ({section, timeline, index, change, grandparent}) {
    const currentDate = new Date()
    const mm = currentDate.getMonth()+1
    const yyyy = currentDate.getFullYear()
    const thisMonth = yyyy+'-'+mm
    
    return (
        <input
          defaultValue={timeline[section]?timeline[section]:''}
          id={section}
          min={section==='end'?'s':'s'}
          max={thisMonth}
          name={section}
          onChange={(e)=> {
            change?change(section,e.target.value,index, grandparent):null
            }}
          key={section}
          type="month"
          required
        />
    )
}
