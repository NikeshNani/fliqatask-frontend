import React, { useState, useRef, useContext } from 'react'
import { FaFileImage, FaFileVideo, FaImages } from 'react-icons/fa'
import { PropertyContext } from './CreateProperty'

const Media = ({ data, onDataChange }) => {
  const coverPhotoInputRef = useRef(null)
  const coverVideoInputRef = useRef(null)
  const otherPhotosInputRef = useRef(null)

  const { handlePrev, handleShowModal } = useContext(PropertyContext)

  const [selectedCoverPhoto, setSelectedCoverPhoto] = useState(null)
  const [selectedCoverVideo, setSelectedCoverVideo] = useState(null)
  const [selectedOtherPhotos, setSelectedOtherPhotos] = useState([])

  const handleFileInputChange = (e) => {
    const name = e.target.name

    if (name === 'coverPhoto' || name === 'coverVideo') {
      const file = e.target.files[0]
      const updatedData = {
        ...data,
        [name]: file,
      }
      if (name === 'coverPhoto') {
        setSelectedCoverPhoto(file)
      } else {
        setSelectedCoverVideo(file)
      }
      onDataChange(updatedData)
    } else if (name === 'otherPhotos') {
      const files = Array.from(e.target.files)
      const updatedData = {
        ...data,
        otherPhotos: files,
      }
      setSelectedOtherPhotos([...selectedOtherPhotos, ...files])
      onDataChange(updatedData)
    }
  }

  const [validationErrors, setValidationErrors] = useState({})

  const validateData = () => {
    const errors = {}

    if (!selectedCoverPhoto && !selectedCoverVideo && selectedOtherPhotos.length === 0) {
      errors.media = 'Select at least one file'
    }

    setValidationErrors(errors)

    return Object.keys(errors).length === 0
  }

  const handleNextClick = () => {
    const isDataValid = validateData()
    if (isDataValid) {
      handleShowModal()
    }
  }

  const buttonStyle = {
    margin: '5px',
    padding: '10px',
    borderRadius: '10px',
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onDataChange(data)
  }

  const inputBoxStyle = {
    border: '1px dashed #ccc',
    padding: '20px',
    textAlign: 'center',
    backgroundSize: 'cover',
    cursor: 'pointer',
  }

  const iconStyle = {
    marginRight: '10px',
  }

  const labelPlaceholderStyle = {
    fontWeight: 'bold',
    marginBottom: '5px',
  }

  const lastOtherPhotosStyle = {
    flex: '1',
  }

  return (
    <div>
      <h3>Upload Files (optional)</h3>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div style={{ display: 'flex' }}>
          <div style={{ marginRight: '20px' }}>
            <label htmlFor="coverPhoto">
              <div style={{ ...inputBoxStyle, background: 'none' }}>
                <FaFileImage size={40} style={iconStyle} />
                <p>Click here to add image</p>
              </div>
            </label>
            <br />
            {selectedCoverPhoto && <p>{selectedCoverPhoto.name}</p>}
            <label style={labelPlaceholderStyle}>Cover Photo</label>
            <input
              type="file"
              onChange={handleFileInputChange}
              ref={coverPhotoInputRef}
              id="coverPhoto"
              name="coverPhoto"
              style={{ display: 'none' }}
            />
            <br />
            <p>The cover photo serves as the first impression for potential customers</p>
          </div>
          <div>
            <label htmlFor="coverVideo">
              <div style={{ ...inputBoxStyle, background: 'none' }}>
                <FaFileVideo size={40} style={iconStyle} />
                <p>Click here to add video</p>
              </div>
            </label>
            <br />
            {selectedCoverVideo && <p>{selectedCoverVideo.name}</p>}
            <label style={labelPlaceholderStyle}>Cover Video</label>
            <input
              type="file"
              onChange={handleFileInputChange}
              ref={coverVideoInputRef}
              id="coverVideo"
              name="coverVideo"
              style={{ display: 'none' }}
            />
            <br />
            <p>It's the best way to accurately show what your location really looks like. (Maximum upload file size: 100MB)</p>
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <div style={lastOtherPhotosStyle}>
            <label htmlFor="otherPhotos">
              <div style={{ ...inputBoxStyle, background: 'none' }}>
                <FaImages size={40} style={iconStyle} />
                <p>Click here to add images</p>
              </div>
            </label>
            <br />
            {selectedOtherPhotos.length > 0 && (
              <div>
                <p>Selected Other Photos:</p>
                <ul>
                  {selectedOtherPhotos.map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
              </div>
            )}
            <label style={labelPlaceholderStyle}>Other Photos</label>
            <input
              type="file"
              multiple
              onChange={handleFileInputChange}
              ref={otherPhotosInputRef}
              accept=".png, .jpg, .jpeg"
              id="otherPhotos"
              name="otherPhotos"
              style={{ display: 'none' }}
            />
            <br />
          </div>
        </div>
        {validationErrors.media && <p style={{ color: 'red' }}>{validationErrors.media}</p>}
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
          Submit
        </button>
      </form>
    </div>
  )
}

export default Media
