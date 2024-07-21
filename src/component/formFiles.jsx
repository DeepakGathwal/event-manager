import React from 'react'

const FormFiles = ({handleSubmit, handleChange, event, isFormSubmitted}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="form-group">Event Name:</label>
                <input className={`form-group  ${
                        isFormSubmitted && event.name === ""
                          ? "is-invalid"
                          : ""
                      }`}   type="text" name="name" value={event.name} onChange={handleChange}  />

{isFormSubmitted && event.name === "" && (
                          <div className="invalid-feedback">
                            Please Enter a Event Name.
                          </div>
                        )}
            </div>
            <div className="form-group">
                <label className="form-group">Event Type:</label>
                <select className={`form-group  ${
                        isFormSubmitted && event.type === ""
                          ? "is-invalid"
                          : ""
                      }`} name="type" value={event.type} onChange={handleChange} >
                    <option className="form-group" value="">Select type</option>
                    <option className="form-group" value="sports">Sports</option>
                    <option className="form-group" value="music">Music</option>
                    <option className="form-group" value="general">General</option>
                    <option className="form-group" value="children">Children</option>
                    <option className="form-group" value="school">School</option>
                </select>

                {isFormSubmitted && event.type === "" && (
                          <div className="invalid-feedback">
                            Please select a Event Type.
                          </div>
                        )}
            </div>
            <div className="form-group">
                <label className="form-group">Event Start Date:</label>
                <input className={`form-group  ${
                        isFormSubmitted && event.startDate === ""
                          ? "is-invalid"
                          : ""
                      }`} type="date" min={new Date().toISOString().split('T')[0]} name="startDate" value={event.startDate} onChange={handleChange}  />
                       {isFormSubmitted && event.startDate === "" && (
                          <div className="invalid-feedback">
                            Please select a StartDate.
                          </div>
                        )}
            </div>
            <div className="form-group">
                <label className="form-group">Event End Date:</label>
                <input  className={`form-group  ${
                        isFormSubmitted && event.endDate === ""
                          ? "is-invalid"
                          : ""
                      }`} type="date" min={new Date().toISOString().split('T')[0]} name="endDate" value={event.endDate} onChange={handleChange}  />

{isFormSubmitted && event.endDate === "" && (
                          <div className="invalid-feedback">
                            Please select a EndDate.
                          </div>
                        )}
            </div>
            <div className="form-group">
                <label className="form-group">Event Description:</label>
                <textarea className={`form-group  ${
                        isFormSubmitted && event.description === ""
                          ? "is-invalid"
                          : ""
                      }`} name="description" value={event.description} onChange={handleChange} ></textarea>
                 {isFormSubmitted && event.description === "" && (
                          <div className="invalid-feedback">
                            Please Enter a Description.
                          </div>
                        )}
            </div>
            <div className="form-group">
                <label className="form-group">Event Handled By:</label>
                <input className={`form-group  ${
                        isFormSubmitted && event.handledBy === ""
                          ? "is-invalid"
                          : ""
                      }`} type="text" name="handledBy" value={event.handledBy} onChange={handleChange}  />
                 {isFormSubmitted && event.handledBy === "" && (
                          <div className="invalid-feedback">
                            Please Enter a Handel By.
                          </div>
                        )}
            </div>
            <div className="form-group">
                <label className="form-group">Event Organisation:</label>
                <input className={`form-group  ${
                        isFormSubmitted && event.organisation === ""
                          ? "is-invalid"
                          : ""
                      }`} type="text" name="organisation" value={event.organisation} onChange={handleChange}  />
                 {isFormSubmitted && event.organisation === "" && (
                          <div className="invalid-feedback">
                            Please Enter a Organisation.
                          </div>
                        )}
            </div>
            <div className="form-group">
                <label className="form-group">Total Number of Sub-Events:</label>
                <input className={`form-group  ${
                        isFormSubmitted && event.subEvents === ""
                          ? "is-invalid"
                          : ""
                      }`} type="number" name="subEvents" value={event.subEvents} onChange={handleChange}  />
                 {isFormSubmitted && event.subEvents === "" && (
                          <div className="invalid-feedback">
                            Please Enter a Sub Event.
                          </div>
                        )}
            </div>
            <button className='decorated-button' type="submit">Save Event</button>
          
        </form>

    </div>
  )
}

export default FormFiles
