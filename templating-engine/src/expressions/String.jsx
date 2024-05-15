import React from 'react';

const StringFormatter = ({ value, format }) => {
    let formattedValue = value;

    switch(format) {
        case 'lower':
            formattedValue = value.toLowerCase();
            break;
        case 'upper':
            formattedValue = value.toUpperCase();
            break;
        case 'slice':
            formattedValue = value.slice(0, 5); // Modify as needed
            break;
        default:
            break;
    }

    return <span>{formattedValue}</span>;
};

export default StringFormatter;