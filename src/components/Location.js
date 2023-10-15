import React,{useContext, useState} from 'react'

import { PropertyContext } from './CreateProperty'

const Location = ({ data, onDataChange }) => {
  console.log('location',data)
  
const {handleNext, handlePrev} = useContext(PropertyContext)

const [validationErrors, setValidationErrors] = useState({})

const handleChange = (e) => {
    const { name, value } = e.target
    const updatedData = { ...data, [name]: value }
    onDataChange(updatedData)
}

const validateData = () =>{

  const errors = {}

  if(!data.address){
    errors.address = "Address is required"
  }

  if(!data.area){
    errors.area = "Area is required"
  }

  setValidationErrors(errors)

  return Object.keys(errors).length === 0

}

const handleNextClick = () => {
  const isDataValid = validateData()
  if (isDataValid) {
    handleNext()
  }
}

const handleSubmit = (e) => {
    e.preventDefault()
}

const buttonStyle = {
  margin: '5px', 
  padding: '10px',
  borderRadius: '10px'    
}

return (
    <div style={{
      padding: '10px'
    }}>
      <h3>Location</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Address :</label> <span style={{ color: 'red' }}>*</span><br/>
          <input type="text" name="address" value={data.address} onChange={handleChange} />
        </div>
        {validationErrors.address && <p style={{ color: 'red' }}>{validationErrors.address}</p>}
        <div style={{ marginBottom: '10px' }}>
          <label>Area :</label><span style={{ color: 'red' }}>*</span><br/>
          <input type="text" name="area" value={data.area} onChange={handleChange} />
        </div>
        {validationErrors.area && <p style={{ color: 'red' }}>{validationErrors.area}</p>}
      </form>
      <button
          type="button"
          onClick={handlePrev}
          class="btn btn-outline-secondary"
          style={buttonStyle}
          >
          Previous
        </button>
        <button
          type="button"
          onClick={handleNextClick}
          class="btn btn-outline-secondary"
          style={buttonStyle}
        >
          Next
        </button>
    </div>
  )
}

export default Location


