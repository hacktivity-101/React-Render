import React from 'react';

class ExpressionTab extends React.Component {
    render() {
        return (
            <div className="expression-tab">
                <div className="tab-layout">
                    <ul className="tabs">
                        <li className="tab active">Tab 1</li>
                        <li className="tab">Tab 2</li>
                        <li className="tab">Tab 3</li>
                    </ul>
                    <div className="tab-content">
                        <ExpressionColumn />
                    </div>
                </div>
            </div>
        );
    }
}

class ExpressionColumn extends React.Component {
    render() {
        return (
            <table className="expression-column">
                <thead>
                    <tr>
                        <th>Column 1</th>
                        <th>Column 2</th>
                        <th>Column 3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Data 1</td>
                        <td>Data 2</td>
                        <td>Data 3</td>
                    </tr>
                    <tr>
                        <td>Data 4</td>
                        <td>Data 5</td>
                        <td>Data 6</td>
                    </tr>
                    <tr>
                        <td>Data 7</td>
                        <td>Data 8</td>
                        <td>Data 9</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default ExpressionTab;
