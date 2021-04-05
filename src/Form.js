import React, { useState } from 'react'

const Form = ({addInput}) => {
  const [value, setValue] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!value) alert("enter an input");
    addInput(value);
    setValue('')
  }
  return (
  <form onSubmit={handleSubmit}>
  <input type="text" placeholder="input" className="input-field" value={value} onChange={e => setValue(e.target.value)}/>
  <input type="submit" className="btn btn-submit"/>
</form>
  )
}

export default Form
