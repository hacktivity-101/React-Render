import React from 'react';

const ExpressionTab = () => {
    const customAttribute = "data-custom";

    return (
        <div className="expression-tab">
            <div className="tab-layout">
                <ul className="tabs">
                    <li className="tab active">Expression</li>
                </ul>
                <div className="tab-content">
                    {/* Adding a custom attribute */}
                    <input type="text" placeholder="Enter expression" {...{[customAttribute]: "custom-value"}} />
                </div>
            </div>
        </div>
    );
};

export default ExpressionTab;
