/* eslint-disable react/prop-types */
import { v4 as uuid } from 'uuid';
// this component makes the jsx based on any object and prints the 'key' 'value' pair to list the items
export default function makeCards ({toCard}) {

    const card = []
    
    if (Array.isArray(toCard)) { 
        toCard.forEach(element => {
            card.push(findKeys(element))
        }); 
    }
    else if (typeof(toCard) === typeof({})){
        card.push(findKeys(toCard)) 
    }
    else card.push(toCard)
    return (
        <div className='card-set' key={'gd'}>
            {card}
        </div>
    )
}

function findKeys (obj) {
    const temp = []
    for (const key in obj) {
        temp.push(editCard(key, obj[key]))
    }
    return (
        <div className="card-item" key={uuid()}>{temp}</div>
    )
}

const editCard = (key, value) => {
    const keyId = `${key}-${value}`
        return (
            <div key={keyId} >
                <h2>{key} - {value}</h2>
            </div>
        )
    }
  