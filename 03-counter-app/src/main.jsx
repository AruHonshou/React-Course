import React from 'react';
import ReactDOM from 'react-dom/client';

//Importaciones de los src para practicar
// import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';

//Importaciones de estilos
import './index.css'

ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp />
    </React.StrictMode>
);