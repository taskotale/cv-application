const addHighlight = (sectionName = 'Section', sectionList =[''], key) => {
    const createList = [...sectionList]
    return {
        name : sectionName,
        list : createList,
        key : key
    }
}

export default addHighlight