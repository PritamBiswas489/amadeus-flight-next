import React from 'react'

export default function ErrorMessage({error}) {
  return (
    <div className="container mt-5 mb-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Sorry</h4>
            <p className="card-text">{error.message ? error.message : 'No offers found for related search.'}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
