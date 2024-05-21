// Write your code here

const registrationStatus = {
  yetToRegistered: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventRegistratationStatus} = props

  const renderNoActiveView = () => (
    <p className="noactive">
      Click on an event ,to view its registration details
    </p>
  )

  const renderYetToRegisteredView = () => (
    <div className="yet-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        className="regi-image"
        alt=" yet to register"
      />
      <p className="desc">
        A live performance brings so much to your relationship with dance.Seeing
        dance live can often make you fall totally in love with this beautiful
        art form.
      </p>
      <button type="button">Register Here</button>
    </div>
  )

  const renderRegisteredView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <p>You have already registered for the event</p>
    </>
  )

  const renderRegistrationsClosedView = () => (
    <div className="closed-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We wiil reopen the registrations soon!</p>
    </div>
  )

  const renderRegistrationStatus = () => {
    switch (activeEventRegistratationStatus) {
      case registrationStatus.yetToRegistered:
        return renderYetToRegisteredView()
      case registrationStatus.registered:
        return renderRegisteredView()
      case registrationStatus.registrationsClosed:
        return renderRegistrationsClosedView()
      default:
        return renderNoActiveView()
    }
  }

  return (
    <div className="registratation-container">{renderRegistrationStatus()}</div>
  )
}

export default ActiveEventRegistrationDetails
