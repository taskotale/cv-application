export default function deleteConfirm(setModal, func, key, index, grandparent) {
    
    const question = (
        <div className="question-box">
            <div>Are you sure?</div>
            <button className="btn-conf-del" onClick={()=>{
                            setModal(false)
                            func(key, index, grandparent)      
                }}>Delete</button>
        </div>
    )
    setModal(question)
}