export default function clearPerson(person, setModal, setFieldToEdit) {
    const question = (
        <div className="question-box">
            <div>Are you sure?</div>
            <button className="btn-conf-del" onClick={()=>clearConfirmed(person, setModal, setFieldToEdit)}>Delete Everything</button>
        </div>
    )
    setModal(question)
}

const clearConfirmed = (person, setModal, setFieldToEdit) => {
    for (const key in person.info) person.info[key] = ''
    person.highlights = []
    person.timelines.map(timeline => timeline.list = [])
    setFieldToEdit(['new'])
    setModal(false)
}