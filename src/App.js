import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Playcards from './components/Playcards';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Playcards />
      <Footer />
    </div>
  );
}

export default App;
