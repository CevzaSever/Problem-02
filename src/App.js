import Discussion from "./Discussion"

export default function Discussions() {
  return (
    <ul className='discussions'>
      <Discussion count={1} />
      <Discussion count={2}/>
     
    </ul>
  )
}


