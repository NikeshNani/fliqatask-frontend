import React,{useContext, useState} from 'react'
import { PropertyContext } from './CreateProperty'

const AddProperty = ({data,onDataChange}) => {

    const {handleNext, handlePrev} = useContext(PropertyContext)

    console.log('add property',data)

    const [validationErrors, setValidationErrors] = useState({})

    const handleOptionSelect = (fieldName, option) => {
        const updatedData = { ...data, [fieldName]: option }
        onDataChange(updatedData)
    }

    const validateData = () => {
        
        const errors = {}

        if (!data.type) {
            errors.type = 'Please select an option';
        }

        if (!data.propertyType) {
            errors.propertyType = 'Please select an option';
        }

        if (!data.ownerType) {
            errors.ownerType = 'Please select an option';
        }
      
        if (!data.possessionStatus) {
            errors.possessionStatus = 'Please select an option';
        }
      
        if (!data.bhkType) {
            errors.bhkType = 'Please select an option';
        }
      
        if (!data.bathroom) {
            errors.bathroom = 'Please select an option';
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
        <div>
            <h3>Add Property</h3>
            <form onSubmit={handleSubmit}>
                <label className="form-label">I Want To </label> <span style={{ color: 'red' }}>*</span><br />
                <div>
                    <button
                        type="button"
                        onClick={() => handleOptionSelect('type', 'Rent')}
                        className={data.type === 'Rent' ? 'selected' : ''}
                        class="btn btn-outline-secondary"
                        style={buttonStyle}

                    >
                        Rent
                    </button>
                    <button
                        type="button"
                        onClick={() => handleOptionSelect('type', 'Sell')}
                        className={data.type === 'Sell' ? 'selected' : ''}
                        class="btn btn-outline-secondary"
                        style={buttonStyle}
                    >
                        Sell
                    </button>
                    <button
                        type="button"
                        onClick={() => handleOptionSelect('type', 'Pg/Co-Living')}
                        className={data.type === 'Pg/Co-Living' ? 'selected' : ''}
                        class="btn btn-outline-secondary"
                        style={buttonStyle}
                    >
                        Pg/Co-Living
                    </button>
                </div>
                {validationErrors.type && <p style={{ color: 'red' }}>{validationErrors.type}</p>}
                <label>Property Type </label> <span style={{ color: 'red' }}>*</span><br/>
                <div>
                    <button
                        type="button"
                        onClick={() => handleOptionSelect('propertyType', 'Flat')}
                        className={data.propertyType === 'Flat' ? 'selected' : ''}
                        class="btn btn-outline-secondary"
                        style={buttonStyle}
                    >
                        Flat
                    </button>
                    <button
                        type="button"
                        onClick={() => handleOptionSelect('propertyType', 'Apartment')}
                        className={data.propertyType === 'Apartment' ? 'selected' : ''}
                        class="btn btn-outline-secondary"
                        style={buttonStyle}
                    >
                        Apartment
                    </button>
                    <button
                        type="button"
                        onClick={() => handleOptionSelect('propertyType', 'Independent House')}
                        className={data.propertyType === 'Independent House' ? 'selected' : ''}
                        class="btn btn-outline-secondary"
                        style={buttonStyle}
                    >
                        Independent House
                    </button>
                    <button
                        type="button"
                        onClick={() => handleOptionSelect('propertyType', 'Pent House')}
                        className={data.propertyType === 'Pent House' ? 'selected' : ''}
                        class="btn btn-outline-secondary"
                        style={buttonStyle}
                    >
                        Pent House
                    </button>
                    <button
                        type="button"
                        onClick={() => handleOptionSelect('propertyType', 'Villa')}
                        className={data.propertyType === 'Villa' ? 'selected' : ''}
                        class="btn btn-outline-secondary"
                        style={buttonStyle}
                    >
                        Villa
                    </button>
                    <button
                        type="button"
                        onClick={() => handleOptionSelect('propertyType', 'Office Space')}
                        className={data.propertyType === 'Office Space' ? 'selected' : ''}
                        class="btn btn-outline-secondary"
                        style={buttonStyle}
                    >
                        Office Space
                    </button>
                    <button
                        type="button"
                        onClick={() => handleOptionSelect('propertyType', 'Warehouse')}
                        className={data.propertyType === 'Warehouse' ? 'selected' : ''}
                        class="btn btn-outline-secondary"
                        style={buttonStyle}
                    >
                        Warehouse
                    </button>
                    <button
                        type="button"
                        onClick={() => handleOptionSelect('propertyType', 'Commercial Land')}
                        className={data.propertyType === 'Commercial Land' ? 'selected' : ''}
                        class="btn btn-outline-secondary"
                        style={buttonStyle}
                    >
                        Commercial Land
                    </button>
                    <button
                        type="button"
                        onClick={() => handleOptionSelect('propertyType', 'Commercial Space')}
                        className={data.propertyType === 'Commercial Space' ? 'selected' : ''}
                        class="btn btn-outline-secondary"
                        style={buttonStyle}
                    >
                        Commercial Space
                    </button>
                    <button
                        type="button"
                        onClick={() => handleOptionSelect('propertyType', 'PG')}
                        className={data.propertyType === 'PG' ? 'selected' : ''}
                        class="btn btn-outline-secondary"
                        style={buttonStyle}
                    >
                        PG
                    </button>
                    <button
                        type="button"
                        onClick={() => handleOptionSelect('propertyType', 'Land')}
                        className={data.propertyType === 'Land' ? 'selected' : ''}
                        class="btn btn-outline-secondary"
                        style={buttonStyle}
                    >
                        Land
                    </button>
                    <button
                        type="button"
                        onClick={() => handleOptionSelect('propertyType', 'Coworking')}
                        className={data.propertyType === 'Coworking' ? 'selected' : ''}
                        class="btn btn-outline-secondary"
                        style={buttonStyle}
                    >
                        Coworking
                    </button>
                </div>
                {validationErrors.propertyType && <p style={{ color: 'red' }}>{validationErrors.propertyType}</p>}
                <label>Owner Type </label> <span style={{ color: 'red' }}>*</span><br/>
                <div>
                    <button
                        type="button"
                        onClick={() => handleOptionSelect('ownerType', 'Landlord')}
                        className={data.ownerType === 'Landlord' ? 'selected' : ''}
                        class="btn btn-outline-secondary"
                        style={buttonStyle}
                    >
                        Landlord
                    </button>
                    <button
                        type="button"
                        onClick={() => handleOptionSelect('ownerType', 'Builder')}
                        className={data.ownerType === 'Builder' ? 'selected' : ''}
                        class="btn btn-outline-secondary"
                        style={buttonStyle}
                    >
                        Builder
                    </button>
                </div>
                {validationErrors.ownerType && <p style={{ color: 'red' }}>{validationErrors.ownerType}</p>}
                <label>Possession Status </label> <span style={{ color: 'red' }}>*</span><br/>
                <div>
                    <button
                        type="button"
                        onClick={() => handleOptionSelect('possessionStatus', 'In Future')}
                        className={data.possessionStatus === 'In Future' ? 'selected' : ''}
                        class="btn btn-outline-secondary"
                        style={buttonStyle}
                    >
                        In Future
                    </button>
                    <button
                        type="button"
                        onClick={() => handleOptionSelect('possessionStatus', 'Ready To Move')}
                        className={data.possessionStatus === 'Ready To Move' ? 'selected' : ''}
                        class="btn btn-outline-secondary"
                        style={buttonStyle}
                    >
                        Ready To Move
                    </button>
                    <button
                        type="button"
                        onClick={() => handleOptionSelect('possessionStatus', 'Under Construction')}
                        className={data.possessionStatus === 'Under Construction' ? 'selected' : ''}
                        class="btn btn-outline-secondary"
                        style={buttonStyle}
                    >
                        Under Construction
                    </button>
                </div>
                {validationErrors.possessionStatus && <p style={{ color: 'red' }}>{validationErrors.possessionStatus}</p>}
                <label>BHK </label> <span style={{ color: 'red' }}>*</span><br/>
                <div>
                    <button
                        type="button"
                        onClick={() => handleOptionSelect('bhkType', '1 Rk')}
                        className={data.bhkType === '1 Rk' ? 'selected' : ''}
                        class="btn btn-outline-secondary"
                        style={buttonStyle}
                    >
                        1 Rk
                    </button>
                    <button
                        type="button"
                        onClick={() => handleOptionSelect('bhkType', '1 Bhk')}
                        className={data.bhkType === '1 Bhk' ? 'selected' : ''}
                        class="btn btn-outline-secondary"
                        style={buttonStyle}
                    >
                        1 Bhk
                    </button>
                    <button
                        type="button"
                        onClick={() => handleOptionSelect('bhkType', '2 Bhk')}
                        className={data.bhkType === '2 Bhk' ? 'selected' : ''}
                        class="btn btn-outline-secondary"
                        style={buttonStyle}
                    >
                        2 Bhk
                    </button>
                    <button
                        type="button"
                        onClick={() => handleOptionSelect('bhkType', '3 Bhk')}
                        className={data.bhkType === '3 Bhk' ? 'selected' : ''}
                        class="btn btn-outline-secondary"
                        style={buttonStyle}
                    >
                        3 Bhk
                    </button>
                    <button
                        type="button"
                        onClick={() => handleOptionSelect('bhkType', '4 Bhk')}
                        className={data.bhkType === '4 Bhk' ? 'selected' : ''}
                        class="btn btn-outline-secondary"
                        style={buttonStyle}
                    >
                        4 Bhk
                    </button>
                    <button
                        type="button"
                        onClick={() => handleOptionSelect('bhkType', '5 Bhk')}
                        className={data.bhkType === '5 Bhk' ? 'selected' : ''}
                        class="btn btn-outline-secondary"
                        style={buttonStyle}
                    >
                        5 Bhk
                    </button>
                </div>
                {validationErrors.bhkType && <p style={{ color: 'red' }}>{validationErrors.bhkType}</p>}
                <label>Bathroom </label> <span style={{ color: 'red' }}>*</span> <br/>
                <div>
                    <button
                        type="button"
                        onClick={() => handleOptionSelect('bathroom', 'No')}
                        className={data.bathroom === 'No' ? 'selected' : ''}
                        class="btn btn-outline-secondary"
                        style={buttonStyle}
                    >
                        No
                    </button>
                    <button
                        type="button"
                        onClick={() => handleOptionSelect('bathroom', '1')}
                        className={data.bathroom === '1' ? 'selected' : ''}
                        class="btn btn-outline-secondary"
                        style={buttonStyle}
                    >
                        1
                    </button>
                    <button
                        type="button"
                        onClick={() => handleOptionSelect('bathroom', '2')}
                        className={data.bathroom === '2' ? 'selected' : ''}
                        class="btn btn-outline-secondary"
                        style={buttonStyle}
                    >
                        2
                    </button>
                    <button
                        type="button"
                        onClick={() => handleOptionSelect('bathroom', '3')}
                        className={data.bathroom === '3' ? 'selected' : ''}
                        class="btn btn-outline-secondary"
                        style={buttonStyle}
                    >
                        3
                    </button>
                    <button
                        type="button"
                        onClick={() => handleOptionSelect('bathroom', '4')}
                        className={data.bathroom === '4' ? 'selected' : ''}
                        class="btn btn-outline-secondary"
                        style={buttonStyle}
                    >
                        4
                    </button>
                    <button
                        type="button"
                        onClick={() => handleOptionSelect('bathroom', '5+')}
                        className={data.bathroom === '5+' ? 'selected' : ''}
                        class="btn btn-outline-secondary"
                        style={buttonStyle}
                    >
                        5+
                    </button>
                </div>
                {validationErrors.bathroom && <p style={{ color: 'red' }}>{validationErrors.bathroom}</p>}
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

export default AddProperty


