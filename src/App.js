import React from 'react';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CartContexProvider from './Components/Context/cartContext';
import CartView from './Components/CartView/CartView';


function App() { 
  let hero = "Hola Mundo";
  return (
    <div className="App">
      
      <CartContexProvider>

        <BrowserRouter>
          <header className="App-header">
            <NavBar/>
            <h1>{hero}</h1>
          </header>
        
          <Routes>
            <Route path="*" element={<h1>Te perdiste pedazo de Iriota</h1>}/>
            <Route path="/" element={<ItemListContainer/>}></Route>
            <Route path="/detalle/:id" element={<ItemDetailContainer/>}></Route>
            <Route path="/categoria/:cat" element={<ItemListContainer/>}></Route>
            <Route path='/cart' element={<CartView/>}></Route>
          </Routes>
        
        </BrowserRouter>

      </CartContexProvider>
    </div>
  ); 
}

export default App;
