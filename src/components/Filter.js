import React from 'react'

const Filter = ({setFilterSubString }) => {

  return (
    <div className="row m-0 mb-4">
      <input placeholder="Type here to find" 
        className="form-control col-md-4" 
        onChange={e => setFilterSubString(e.target.value.toLowerCase())}
      />
    </div>
  )
}

export default Filter
