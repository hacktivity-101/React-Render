import React, { useState } from 'react';

function InheritanceTab({ parentTemplate, childTemplates, onSelectTemplate }) {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    // Call a function provided by the parent component to handle template selection
    onSelectTemplate(template);
  };

  return (
    <div className="inheritance-tab">
      <h3>Inheritance</h3>
      <div className="parent-template">
        <h4>Parent Template</h4>
        <p>{parentTemplate}</p>
      </div>
      <div className="child-templates">
        <h4>Child Templates</h4>
        <ul>
          {childTemplates.map((template, index) => (
            <li key={index} onClick={() => handleTemplateSelect(template)}>
              {template}
            </li>
          ))}
        </ul>
      </div>
      {selectedTemplate && (
        <div className="selected-template">
          <h4>Selected Template</h4>
          <p>{selectedTemplate}</p>
        </div>
      )}
    </div>
  );
}

export default InheritanceTab;
