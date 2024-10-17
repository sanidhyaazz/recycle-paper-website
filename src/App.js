import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Playcards from './components/Playcards';
import Footer from './components/Footer';
import NewNav from './components/newNav';

function App() {
  return (
    <div className="App">
      <NewNav />
      <Header />
      <Playcards />
      <Footer />
    </div>
  );
}

export default App;
