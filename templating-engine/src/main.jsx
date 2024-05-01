import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Condition from './expressions/Condition.jsx';
import Loop from './expressions/Loop.jsx';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


const conditionElement = document.getElementsByTagName('condition');
if(conditionElement.length){
  const ele = conditionElement[0];
  const check = ele.getAttribute('check');
  const ifValue = ele.getAttribute('if-value');
  const elseValue = ele.getAttribute('else-value');

  ReactDOM.createRoot(ele).render(
    <Condition conditionValue={eval(check)} ifValue={ifValue} elseValue={elseValue} />
  )
}

// loop
const loopElement = document.getElementsByTagName('loop');
if (loopElement.length) {
  const ele = loopElement[0];
  const iterator = JSON.parse(ele.getAttribute('iterator'));
  const value = ele.getAttribute('value');
  const children = ele.innerHTML;

  ReactDOM.createRoot(ele).render(
    <Loop iterator={iterator} value={value}>
      {children}
    </Loop>
  );
}

// number filters
// number filters
const numberFilterElement = document.getElementsByTagName('number-filter');
if (numberFilterElement.length) {
  const ele = numberFilterElement[0];
  const value = ele.getAttribute('value');
  const filter = ele.getAttribute('filter');

  ReactDOM.createRoot(ele).render(
    <NumberFilters value={value} filter={filter} />
  );
}