export default function EditHighlights ({highlight, onChange}) {
    const text = highlight

    const title = <h2>{text.name}</h2>
    const fields = []
    text.list.map((field, index) => {
        fields.push(
            <input
                id={field}
                name={field} 
                value={field}
                key={index} 
                onChange={(e)=> {
                    onChange(text, index, e.target.value)
                    }
                }
            />
        )
    })

    const addNewBtn = <button>Add more {text.name}</button>

    return (
        <div>
            {title}
            {fields}
            <div>
                {addNewBtn}
            </div>
        </div>
    )
}
