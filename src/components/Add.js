import React from 'react'
import MaskedInput from 'react-text-mask';


const Add = ({ showForm, addPerson }) => {
  const details= {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  }

  if(showForm) {
    return (
      <div className="border shadow p-4 mb-4 bg-white mb-3">
        <form onSubmit={() => addPerson(details)} className="m-4">
          <div className="form-row">
            <div className="form-group col-md-2 offset-1">
              <label>id</label>
              <input type="number" className="form-control" required
                onBlur={event => details.id = event.target.value }
              />
            </div>
            <div className="form-group col-md-4">
              <label>firstName</label>
              <input type="text" className="form-control" required
                onBlur={event => details.firstName = 
                  event.target.value.charAt(0).toUpperCase() 
                  + event.target.value.slice(1)}
              />
            </div>
            <div className="form-group col-md-4">
              <label>lastName</label>
              <input type="text" className="form-control" required
                onBlur={event => details.lastName = 
                  event.target.value.charAt(0).toUpperCase() 
                  + event.target.value.slice(1)}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-5 offset-1">
              <label>email</label>
              <input type="email" className="form-control" required
                onBlur={event => details.email = 
                  event.target.value.charAt(0).toUpperCase() +
                  event.target.value.charAt(1).toUpperCase() +
                  event.target.value.slice(2)}
              />
            </div>
            <div className="form-group col-md-5">
              <label>phone</label>
              <MaskedInput type="tel" className="form-control" guide={true}
                mask={['(',/[0-9]/,/\d/,/\d/,')',/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/,/\d/]} minLength={10} placeholder={'Type 10 numbers'} required 
                onBlur={event => details.phone = event.target.value}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-success btn-block mb-3">
            Apply
          </button>
        </form>
      </div>
    )
  } else return null
}

export default Add