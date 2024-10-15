import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// test ReactDom
// const data =(
//   <h1>Hi eiei</h1>
// )
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   data
// );


//component test
//Function Component
// function HelloComponent(){
//   return <h1>Hello Component</h1>
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <HelloComponent/>
// );

//Class Component
// class HelloComponent extends React.Component{
//   render(){
//     return <h1>Hello Component Class</h1>
//   }
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <HelloComponent/>
// );


//External Component
import HelloComponent from './components/HelloComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HelloComponent/>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
