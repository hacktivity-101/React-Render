import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Condition from './expressions/Condition.jsx';
import NumberFilters from './expressions/NumberFilters.jsx';
import MyForm from './expressions/Form.jsx';
import DateFilter from './expressions/DateFilters.jsx';
import Alert from './expressions/Alert.jsx';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


const conditionElement = document.getElementsByTagName('condition');
if (conditionElement.length) {
  const ele = conditionElement[0];
  const check = ele.getAttribute('check');
  const ifValue = ele.getAttribute('if-value');
  const elseValue = ele.getAttribute('else-value');

  ReactDOM.createRoot(ele).render(
    <Condition conditionValue={eval(check)} ifValue={ifValue} elseValue={elseValue} />
  )
}

const numberElement = document.getElementsByTagName('number-filter');
if (numberElement.length) {
  const ele = numberElement[0];
  const value = ele.getAttribute('value');
  const filterName = ele.getAttribute('filter-name');

  ReactDOM.createRoot(ele).render(
    <NumberFilters value={value} filterName={filterName} />
  )
}

const formElement = document.getElementsByTagName('custom-form');
if (formElement.length) {
  const ele = formElement[0];
  const fieldNames = eval(ele.getAttribute('fields'));
  //   console.log(eval(fieldNames));
  const method = ele.getAttribute('method');
  const action = ele.getAttribute('action');

  ReactDOM.createRoot(ele).render(
    <MyForm fieldNames={fieldNames} method={method} action={action} />
  )
}

const dateElement = document.getElementsByTagName('date-filter');
if (dateElement.length) {
  const ele = dateElement[0];
  const date = ele.getAttribute('date');
  const format = ele.getAttribute('format');

  ReactDOM.createRoot(ele).render(
    <DateFilter date={date} format={format} />
  )
}

const alertElement = document.getElementsByTagName('alert');
if (alertElement.length) {
  const ele = alertElement[0];
  const type = ele.getAttribute('type');
  const message = ele.getAttribute('message');

  ReactDOM.createRoot(ele).render(
    <Alert type={type} message={message} />
  )
}

const stringElement = document.getElementsByTagName('string');
if (stringElement.length) {
  const ele = stringElement[0];
  const value = ele.getAttribute('value');

  ReactDOM.createRoot(ele).render(
    <>{value}</>
  )
}