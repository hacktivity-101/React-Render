import React from 'react';

const ExpressionTab = () => (
  <div className="expression-tab">
    <div className="tab-layout">
      <ul className="tabs">
        <li className="tab active">Tab 1</li>
        <li className="tab">Tab 2</li>
        <li className="tab">Tab 3</li>
      </ul>
      <div className="tab-content">
        <div className="raw-output" dangerouslySetInnerHTML={{ __html: "<p>Hello, world!</p>" }}></div>
      </div>
    </div>
  </div>
);

export default ExpressionTab;
