import React from 'react'

const errorhandling = () => 
    function ErrorHandlingTab({ errorMessage, onRetry }) {
        const [showErrorMessage, setShowErrorMessage] = useState(!!errorMessage);
      
        const handleRetry = () => {
          setShowErrorMessage(false);
          // Call a function provided by the parent component to handle retry action
          onRetry();
        };
  return (
    <div> <div className="error-handling-tab">
    <h3>Error Handling</h3>
    {showErrorMessage && (
      <div className="error-message">
        <p>{errorMessage}</p>
        <button onClick={handleRetry}>Retry</button>
      </div>
    )}
  </div></div>
  )
}

export default errorhandling