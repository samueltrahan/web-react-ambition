import React from 'react';
import Landing from './components/Banner/Banner';
import Header from './components/Header/Header';
import Display from './components/Projects/Display';
import Contact from './components/Contact/Contact';
import Address from './components/Contact/Address';
import Footer from './components/Footer/Footer';
import './App.css';

export default function App() {
  return (
    <div>
      <Header />
      <Landing />
      <Display />
      <div className="contact">
        <div className="contact-info">
      <Contact />
        </div>
        <div className="address-info">
      <Address />
        </div>
      </div>
      <Footer />
    </div>
  )
}
