import React from 'react';

function EventComponent() {
    function handleClick() {
        // Handle click event here
    }

    function handleChange(event) {
        // Handle change event here
    }

    return (
        <div>
            <button onClick={handleClick}>Click me</button>
            <input type="text" onChange={handleChange} />
        </div>
    );
}

export default EventComponent;
