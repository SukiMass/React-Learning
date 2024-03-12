import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Garage from './components/Garage';
import FavouriteColor from './State_Comp/FavouriteColor';
import Car from './State_Comp/Car'
import Bike from "./State_Comp/Bike"
import List from "./State_Comp/List"
import Render from './State_Comp/Render';
import MyForm from './Form_Comp/MyForm';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <MyForm/>
    <Render />
    <FavouriteColor/>
    <Car/>
    <Bike/>
    <List />
    <Garage/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
