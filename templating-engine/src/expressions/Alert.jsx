import React from 'react';

const Alert = ({ type, message }) => {
    return (
        <div className={`alert alert-${type}`} style={{
            backgroundColor: type === 'success' ? '#d4edda' : type === 'danger' ? '#f8d7da' : type === 'warning' ? '#fff3cd' : '#cce5ff',
            padding: '10px',
            borderRadius: '5px',
            color: type === 'success' ? '#155724' : type === 'danger' ? '#721c24' : type === 'warning' ? '#856404' : '#0c5460',
        }}>
            {message}
        </div>
    );
};

export default Alert;