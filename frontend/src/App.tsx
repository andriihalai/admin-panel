import React from 'react';
import './App.css';
import ApartmentForm from './components/ApartmentForm';

function App() {
  return (
    <div className="App">
      <h1>Apartments Marketplace</h1>
      <div>
        <h2>&#129297; Create a new rent</h2>
        <ApartmentForm />
      </div>
    </div>
  );
}

export default App;
