export default function clearPerson(person, setModal) {

    const question = (
        <div className="question-box">
            <div>Are you sure?</div>
            <button className="btn-conf-del" onClick={()=>clearConfirmed(person, setModal)}>Delete Everything</button>
        </div>
    )
    setModal(question)
}

const clearConfirmed = (newPerson, setModal) => {
    for (const key in newPerson.info) newPerson.info[key] = ''
    newPerson.highlights = []
    newPerson.timelines.map(timeline => timeline.list = [])
    setModal(false)
}