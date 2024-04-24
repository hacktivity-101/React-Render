import React, { useState } from 'react';

const ExpressionTab = () => {
    const [expression, setExpression] = useState("");
    const [result, setResult] = useState("");

    const evaluateExpression = () => {
        try {
            setResult(eval(expression).toString());
        } catch (error) {
            setResult("Error: " + error.message);
        }
    };

    return (
        <div className="expression-tab">
            <div className="tab-layout">
                <ul className="tabs">
                    <li className="tab active">Expression</li>
                </ul>
                <div className="tab-content">
                    <input type="text" value={expression} onChange={e => setExpression(e.target.value)} placeholder="Enter expression" />
                    <button onClick={evaluateExpression}>Evaluate</button>
                    <div className="expression-result">Result: {result}</div>
                </div>
            </div>
        </div>
    );
};

export default ExpressionTab;
