import React, { useState, useEffect, useContext } from 'react'
import { PropertyContext } from './CreateProperty'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDumbbell,
  faBook,
  faCarBattery,
  faTableTennisPaddleBall,
  faPersonRunning,
  faTree,
  faPersonSkating,
  faSpa,
} from '@fortawesome/free-solid-svg-icons'

const amenityIcons = [
  { icon: faDumbbell, label: 'Gym' },
  { icon: faBook, label: 'Library' },
  { icon: faCarBattery, label: 'Power Back Up' },
  { icon: faTableTennisPaddleBall, label: 'Indoor Game' },
  { icon: faPersonRunning, label: 'Jogging Track' },
  { icon: faTree, label: 'Park' },
  { icon: faPersonSkating, label: 'Skating' },
  { icon: faSpa, label: 'Spa' },
]

const Amenities = ({ data, onDataChange }) => {
  const { handleNext, handlePrev } = useContext(PropertyContext)

  const [selectedAmenities, setSelectedAmenities] = useState(data.amenities)

  const handleSelect = (label) => {
    if (selectedAmenities.includes(label)) {
      setSelectedAmenities(selectedAmenities.filter((amenity) => amenity !== label))
    } else {
      setSelectedAmenities([...selectedAmenities, label])
    }
  }

  useEffect(() => {
    onDataChange({ ...data, amenities: selectedAmenities })
  }, [selectedAmenities])

  const isAmenitySelected = (label) => selectedAmenities.includes(label)

  const [validationErrors, setValidationErrors] = useState({})

  const validateData = () => {
    const errors = {}
    if (selectedAmenities.length < 2) {
      errors.label = 'Select at least two or more amenities '
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
    borderRadius: '10px',
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <h3>Amenities</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {amenityIcons.map((amenity, index) => (
            <div
              key={index}
              onClick={() => handleSelect(amenity.label)}
              style={{
                border: '1px solid #ccc',
                borderRadius: '5px',
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: '10px',
                backgroundColor: isAmenitySelected(amenity.label) ? '#e0e0e0' : 'white',
              }}
            >
              <FontAwesomeIcon icon={amenity.icon} style={{ marginBottom: '5px' }} />
              <label>{amenity.label}</label>
            </div>
          ))}
        </div>
        {validationErrors.label && <p style={{ color: 'red' }}>{validationErrors.label}</p>}
        <button
          type="button"
          onClick={handlePrev}
          className="btn btn-outline-secondary"
          style={buttonStyle}
        >
          Previous
        </button>
        <button
          type="button"
          onClick={handleNextClick}
          className="btn btn-outline-secondary"
          style={buttonStyle}
        >
          Next
        </button>
      </form>
    </div>
  )
}

export default Amenities
