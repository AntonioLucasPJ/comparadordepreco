
import './App.css';
import { useEffect, useRef, useState } from 'react';
import { api } from './components/services';
import { Produtos } from './components/produtos';
import { Search } from './components/search';
import { Nav } from './components/sidebar';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Outlet>
      </Outlet>
    </div>
  );
}

export default App;
