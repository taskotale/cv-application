import addHighlight from "./addNewHighlight";
import person from "./data";
import { v4 as uuid } from 'uuid';

const addNewHighlightBtn = (addToNav) => {
    person.highlights.push(addHighlight('New Highlight', ['Highlight'], uuid()))
    addToNav('New Highlight','highlights')
  }

  export default addNewHighlightBtn