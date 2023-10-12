
function Button({name, location, id, setHandle}) {
    const handleClick = setHandle
    return (
      <button className='nav-btn' id={name} key={id}
      onClick={()=> {
        handleClick(id, location)
      }}
      >{name}</button>
    )
  } 

  export default Button