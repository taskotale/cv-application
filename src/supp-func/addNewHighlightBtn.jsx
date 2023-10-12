//import addHighlight from "./addNewHighlight";
import person from "./data";
import { v4 as uuid } from 'uuid';


const addNewHighlightBtn = (addToNav) => {
    const id = uuid()
    const checkExisting = person.highlights.find(highlight=>highlight.name === 'New Highlight')
    if(!checkExisting){
        person.highlights.push(addHighlight('New Highlight', ['Highlight'], id))
        addToNav(id,'highlights')
    }
    else addToNav(checkExisting.key,'highlights')
  }

export default addNewHighlightBtn

const addHighlight = (sectionName = 'Section', sectionList =[''], key) => {
    const createList = [...sectionList]
        return {
            name : sectionName,
            list : createList,
            key : key
        }
}