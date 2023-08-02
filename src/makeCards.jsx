/* eslint-disable react/prop-types */
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

    return (
        <div className='card-set'>
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
        <div className="card-item">{temp}</div>
    )
}

const editCard = (key, value) => {
        return (
            <div>
                <h2>{key} - {value}</h2>
            </div>
        )
    }
  