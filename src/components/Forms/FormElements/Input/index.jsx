import './style.css'
const Input = ({value, type, name, placeholder, onChange, ...rest}) => {
  return (
    <>
      <input 
        className="input"
        {...rest}
        name={name} 
        type={type} 
        value={value}  
        onChange={onChange}
        placeholder={placeholder} 
      />
    </>
  )
}

export default Input
