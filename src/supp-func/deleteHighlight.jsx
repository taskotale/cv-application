import person from './data.jsx'

export default function deleteHighlight (key, changeScreen) {
    let toDelete = person.highlights.find(highlight=>highlight.key===key)
    let newHighlight = person.highlights.filter(highlight => highlight !== toDelete)
    person.highlights = newHighlight
    newHighlight.length >0? changeScreen(person.highlights[0].key,'highlights'): changeScreen(false,'highlights')
}

