import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Condition from './expressions/Condition.jsx';
import NumberFilters from './expressions/NumberFilters.jsx';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


// const conditionElement = document.getElementsByTagName('condition');
// if(conditionElement.length){
//   const ele = conditionElement[0];
//   const check = ele.getAttribute('check');
//   const ifValue = ele.getAttribute('if-value');
//   const elseValue = ele.getAttribute('else-value');

//   ReactDOM.createRoot(ele).render(
//     <Condition conditionValue={eval(check)} ifValue={ifValue} elseValue={elseValue} />
//   )
// }

const numberElement = document.getElementsByTagName('number-filter');
if (numberElement.length) {
    const ele = numberElement[0];
    const value = ele.getAttribute('value');
    const filterName = ele.getAttribute('filter-name');

    ReactDOM.createRoot(ele).render(
        <NumberFilters value={value} filterName={filterName} />
    )
}
