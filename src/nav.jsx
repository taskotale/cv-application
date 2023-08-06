export default function Nav () {
    return (
        <>
        <Button name='info'></Button>
        <Button name='education'></Button>
        <Button name='experience'></Button>
        </>
    )
}

function Button(name) {
  return (
    <button className='nav-btn' id={name.name} >{name.name}</button>
  )
} 