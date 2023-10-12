import person from "../supp-func/data"

export default function NewPersonStart ({setHandle, changeInfo}) {
    return (
        <>
        <div>Start with your name:
            <input type="text" 
                autoFocus
                onKeyUp={(e)=>{if(e.code === 'Enter')setHandle(['info']) }}
                onChange={(e)=>{
                    person.info.name = e.target.value
                    changeInfo('name', e.target.value)
                }}/>
            <button
                type="submit"
                onSubmit={()=>setHandle(['info'])}
                onClick={()=>setHandle(['info'])}
            >Start</button>
        </div>
        </>
    )
}