import React from 'react'

const Details = ({ details, closeDetails }) => {
  if(details.description){
    return (
      <div className="border shadow p-4 mb-4 bg-white">
        <form className="m-4">
          <div className="form-group col-md-6 offset-3">
            
            <p>Выбран пользователь </p>
            <b>{details.firstName}&nbsp;{details.lastName}</b>
          </div>
          <hr/>
          <div className="form-group col-md-6 offset-3">
            <p>Описание: </p>
            <b>{details.description}</b>
          </div>
          <div className="form-group col-md-6 offset-3">
            <p>Адресс проживания: </p>
            <b>{details.address.streetAddress}</b>
          </div>
          <div className="form-group col-md-6 offset-3">
            <p>Город: </p>
            <b>{details.address.city}</b>
          </div>
          <div className="form-group col-md-6 offset-3">
            <p>Провинция/штат: </p>
            <b>{details.address.state}</b>
          </div>
          <div className="form-group col-md-6 offset-3">
            <p>Индекс: </p>
            <b>{details.address.zip}</b>
          </div>
          <hr/>
        </form>
        <button type="button" 
                className="btn btn-outline-secondary btn-block"
                onClick={closeDetails}
        >
          Close
        </button>
      </div>
    )
  } else return null
  
}

export default Details