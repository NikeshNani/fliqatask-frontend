import React,{useContext, useState} from 'react'

import { PropertyContext } from './CreateProperty'

const DetailsProperty = ({ data, onDataChange }) => {
  console.log('details property ', data)
  
  const {handleNext, handlePrev} = useContext(PropertyContext)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    const updatedData = { ...data, [name]: value }
    onDataChange(updatedData)
  }

  const [validationErrors, setValidationErrors] = useState({})

  const validateData = () =>{
    
    const errors = {}
  
    if(!data.builderName){
      errors.builderName = "Please enter the builder name"
    }

    if(!data.monthlyRent){
      errors.monthlyRent = "Please enter monthly rent amount"
    }

    if(!data.maintenanceCharges){
      errors.maintenanceCharges = "Please enter maintenance charges amount"
    }

    if(!data.securityDeposit){
      errors.securityDeposit = "Please enter security deposit amount"
    }

    if(!data.builtUpArea){
      errors.builtUpArea = "Please enter built up area in sq ft."
    }

    if(!data.floors){
      errors.floors=  "Please select number of floors"
    }

    if(!data.availableFrom){
      errors.availableFrom = "Please select available date"
    }
    
    if(!data.ageOfProperty){
      errors.ageOfProperty="Please select age of property"
    }

    if(!data.description){
      errors.description ="Please provide a description about your property"
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

  const buttonStyle = {
    margin: '5px', 
    padding: '10px',
    borderRadius: '10px'    
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div style={{
      padding: '10px'
  }}>
      <h3>Property Details</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Builder Name :</label><span style={{ color: 'red' }}>*</span><br />
          <input type="text" name="builderName" placeholder="Enter builder's name" value={data.builderName} onChange={handleChange} />
        </div>
        {validationErrors.builderName && <p style={{ color: 'red' }}>{validationErrors.builderName}</p>}
        <div style={{ marginBottom: '10px' }}>
          <label>Monthly Rent :</label><span style={{ color: 'red' }}>*</span><br />
          <input type="number" name="monthlyRent" placeholder="Enter monthly rent" value={data.monthlyRent} onChange={handleChange} />
        </div>
        {validationErrors.monthlyRent && <p style={{ color: 'red' }}>{validationErrors.monthlyRent}</p>}
        <div style={{ marginBottom: '10px' }}>
          <label>Maintenance Charges :</label><span style={{ color: 'red' }}>*</span><br />
          <input type="number" name="maintenanceCharges" placeholder="Enter maintenance charges" value={data.maintenanceCharges} onChange={handleChange} />
        </div>
        {validationErrors.maintenanceCharges && <p style={{ color: 'red' }}>{validationErrors.maintenanceCharges}</p>}
        <div style={{ marginBottom: '10px' }}>
          <label>Security Deposit :</label><span style={{ color: 'red' }}>*</span><br />
          <input type="number" name="securityDeposit" placeholder="Enter security deposit" value={data.securityDeposit} onChange={handleChange} />
        </div>
        {validationErrors.securityDeposit && <p style={{ color: 'red' }}>{validationErrors.securityDeposit}</p>}
        <div style={{ marginBottom: '10px' }}>
          <label>Built-Up Area :</label><span style={{ color: 'red' }}>*</span>
          <select style={{ marginLeft: '10px' }}name="builtUpArea" value={data.builtUpArea} onChange={handleChange}>
            <option value=''>sq. ft.</option>
            <option value="500 sq. ft.">500 sq. ft.</option>
            <option value="1000 sq. ft.">1000 sq. ft.</option>
            <option value="1500 sq. ft.">1500 sq. ft.</option>
          </select>
        </div>
        {validationErrors.builtUpArea && <p style={{ color: 'red' }}>{validationErrors.builtUpArea}</p>}
        <div style={{ marginBottom: '10px' }}>
          <label>Floors :</label><span style={{ color: 'red' }}>*</span><br />
          <input type="number" name="floors" placeholder="Enter number of floors" value={data.floors} onChange={handleChange} />
        </div>
        {validationErrors.floors && <p style={{ color: 'red' }}>{validationErrors.floors}</p>}
        <div style={{ marginBottom: '10px' }}>
          <label>Available From :</label><span style={{ color: 'red' }}>*</span><br />
          <input type="date" name="availableFrom" placeholder="Select available date" value={data.availableFrom} onChange={handleChange} />
        </div>
        {validationErrors.availableFrom && <p style={{ color: 'red' }}>{validationErrors.availableFrom}</p>}
        <div style={{ marginBottom: '10px' }}>
          <label>Age of Property :</label><span style={{ color: 'red' }}>*</span><br />
          <select name="ageOfProperty" value={data.ageOfProperty} onChange={handleChange}>
            <option value=''>Select age of property</option>
            <option value="0-6 months">0-6 months</option>
            <option value="6-12 months">6-12 months</option>
          </select>
        </div>
        {validationErrors.ageOfProperty && <p style={{ color: 'red' }}>{validationErrors.ageOfProperty}</p>}
        <div style={{ marginBottom: '10px' }}>
          <label>Description :</label><span style={{ color: 'red' }}>*</span><br />
          <textarea name="description" placeholder="Provide property description" value={data.description} onChange={handleChange}></textarea>
        </div>
        {validationErrors.description && <p style={{ color: 'red' }}>{validationErrors.description}</p>}
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
      </form>
    </div>
  )
}

export default DetailsProperty


