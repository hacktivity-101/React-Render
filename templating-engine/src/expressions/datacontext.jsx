import React, { createContext, useContext, useState } from 'react';

// Create a context for data
const DataContext = createContext();

// Custom hook to access data context
const useDataContext = () => useContext(DataContext);

// Component for providing data context
const DataProvider = ({ children }) => {
    const [data, setData] = useState(""); // Example data

    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    );
};

// Expression tab component
const ExpressionTab = () => {
    const { data, setData } = useDataContext();

    // Function to handle changes to data
    const handleDataChange = (event) => {
        setData(event.target.value);
    };

    return (
        <div className="expression-tab">
            <div className="tab-layout">
                <ul className="tabs">
                    <li className="tab active">Expression</li>
                </ul>
                <div className="tab-content">
                    {/* Input field bound to data context */}
                    <input type="text" value={data} onChange={handleDataChange} placeholder="Enter data" />
                    {/* Display data */}
                    <div>Data: {data}</div>
                </div>
            </div>
        </div>
    );
};

// App component
const App = () => {
    return (
        <DataProvider>
            <ExpressionTab />
        </DataProvider>
    );
};

export default App;
