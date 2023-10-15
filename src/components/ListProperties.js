import React, { useState, useEffect } from "react"
import axios from "axios"
import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom"

const ListProperties = () => {
  const [allProperties, setAllProperties] = useState([])
  const [sortBy, setSortBy] = useState("availableFrom") 
  const [filterBy, setFilterBy] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3090/api/listProperties')
        setAllProperties(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])

  const handleSortChange = (event) => {
    setSortBy(event.target.value)
  }

  const handleFilterChange = (event) => {
    const filterValue = event.target.value.toLowerCase()
    setFilterBy(filterValue)
  }
  

  // Apply sorting and filtering to properties
  const filteredAndSortedProperties = allProperties
    .filter(property => property.propertyType.toLowerCase().includes(filterBy))
    .sort((a, b) => {
      if (sortBy === "availableFrom") {
        return new Date(a.availableFrom) - new Date(b.availableFrom)
      } else if (sortBy === "monthlyRent") {
        return a.monthlyRent - b.monthlyRent
      } else if (sortBy === "bhkType") {
        return a.bhkType.localeCompare(b.bhkType)
      }
      return 0
    })

  return (
    <div>
      <h1>Listing all properties</h1>
      <Link to="/">Back to Create Property</Link>
      <div style={{ display: 'flex',margin:'20px', padding:'10px'}}>
        <label>Sort By : </label>
        <select onChange={handleSortChange} style={{marginLeft:'10px'}}>
          <option value="availableFrom">Available From</option>
          <option value="monthlyRent">Monthly Rent</option>
          <option value="bhkType">BHK Type</option>
        </select>
        <br />
        <label style={{marginLeft:'30px'}}>Filter By Property Type: </label>
        <input
          type="text"
          style={{marginLeft:'10px'}}
          value={filterBy}
          onChange={handleFilterChange}
        />
      </div>
      <div className="row">
        {filteredAndSortedProperties.map((property) => (
          <div key={property._id} className="col-md-4">
            <Card>
              <Card.Body>
                <Card.Title>Property Type: {property.propertyType}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">BHK Type: {property.bhkType}</Card.Subtitle>
                <Card.Text>Available From: {property.availableFrom.substring(0, 10)}</Card.Text>
                <Card.Text>Monthly Rent: {property.monthlyRent}</Card.Text>
                <Card.Text>Description: {property.description}</Card.Text>
                <Card.Text>Address: {property.address}</Card.Text>
                <Card.Text>Area: {property.area}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListProperties
