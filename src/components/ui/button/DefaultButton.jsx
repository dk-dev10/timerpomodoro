import './style.css'

const DefaultButton = ({children = 'button'}) => {
  return (
    <button className='defaultBtn' >{children}</button>
  )
}

export default DefaultButton