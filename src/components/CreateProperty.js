import React, { createContext, useState} from 'react'
import { Steps, Button } from 'antd'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal'
import { useHistory } from 'react-router-dom'
import AddProperty from './AddProperty'
import DetailsProperty from './DetailsProperty'
import Location from './Location'
import Amenities from './Amenities'
import Media from './Media'

const PropertyContext = createContext()
export { PropertyContext }

const { Step } = Steps

const CreateProperty = () => {
  const [formData, setFormData] = useState({
    type: '',
    propertyType: '',
    ownerType: '',
    possessionStatus: '',
    bhkType: '',
    bathroom: '',
    builderName: '',
    monthlyRent: 0,
    maintenanceCharges: 0,
    securityDeposit: 0,
    builtUpArea: '',
    floors: 0,
    availableFrom: '',
    ageOfProperty: 0,
    description: '',
    address: '',
    area: '',
    amenities: [],
    coverPhoto: null,
    coverVideo: null,
    otherPhotos: [],
  })

  const renderStep = (step) => {
    switch (step) {
      case 0:
        return <AddProperty data={formData} onDataChange={handleDataChange} />
      case 1:
        return <DetailsProperty data={formData} onDataChange={handleDataChange} />
      case 2:
        return <Location data={formData} onDataChange={handleDataChange} />
      case 3:
        return <Amenities data={formData} onDataChange={handleDataChange} />
      case 4:
        return <Media data={formData} onDataChange={handleDataChange} />
      default:
        return null
    }
  }

  const [currentStep, setCurrentStep] = useState(0)

  const handleDataChange = (data) => {
    setFormData({ ...formData, ...data })
  }

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const history = useHistory()

  const [showModal, setShowModal] = useState(false)

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const handleShowModal = () => {
    setShowModal(true)
  }

  const resetForm = () => {
    setFormData({
      type: '',
      propertyType: '',
      ownerType: '',
      possessionStatus: '',
      bhkType: '',
      bathroom: '',
      builderName: '',
      monthlyRent: 0,
      maintenanceCharges: 0,
      securityDeposit: 0,
      builtUpArea: '',
      floors: 0,
      availableFrom: '',
      ageOfProperty: 0,
      description: '',
      address: '',
      area: '',
      amenities: [],
      coverPhoto: null,
      coverVideo: null,
      otherPhotos: [],
    })
  }

  const submitData = async () => {
    try {
      const formDataToSend = new FormData()

      for (const key in formData) {
        if (formData[key]) {
          if (Array.isArray(formData[key])) {
            formData[key].forEach((value) =>
              formDataToSend.append(key, value)
            )
          } else {
            formDataToSend.append(key, formData[key])
          }
        }
      }

      const response = await axios.post('http://localhost:3090/api/properties', formDataToSend)
      console.log('Response from server:', response.data)
      resetForm()
      history.push('/list-properties')
    } catch (e) {
      alert(e.message)
    }
  }

  return (
    <div>
      <PropertyContext.Provider value={{ handleNext, handlePrev, handleShowModal}}>
        <Steps current={currentStep}>
          <Step title="Add Property" />
          <Step title="Details" />
          <Step title="Location" />
          <Step title="Amenities" />
          <Step title="Media" />
        </Steps>
        <main>{renderStep(currentStep)}</main>
      </PropertyContext.Provider>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Property</Modal.Title>
        </Modal.Header>
        <Modal.Title>Save as Draft </Modal.Title>
        <Modal.Body>
            When a property is saved as a draft, it remains hidden from the potential customers.To make it visible, use the 'Publish' option to list the property.
        </Modal.Body>
        <Modal.Title>Publish </Modal.Title>
        <Modal.Body>
            Listing your property for marketing,sale,or rent to potential customers.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="btn btn-outline-secondary" onClick={handleCloseModal}>
            Save as Draft
          </Button>
          <Button variant="btn btn-outline-secondary" onClick={submitData}>
            Publish
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default CreateProperty
