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
      <button className='nav-btn' key={name.name} >{name.name}</button>
    )
  }