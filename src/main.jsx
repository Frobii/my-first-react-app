import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import  { ITCrowdGreeting } from './Greeting.jsx';
import { SeaParksAssumption } from './SeaParks.jsx';
import HTMLConversion from './HTMLConversion.jsx';
import Bio from './Bio.jsx';
import TodoList from "./ToDoList.jsx"
import AnimalList from './AnimalList.jsx';
import Person from './Person.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Person />
  </React.StrictMode>,
);
