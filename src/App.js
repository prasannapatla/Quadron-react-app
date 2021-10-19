import logo from './logo.svg';

import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Service from './components/Service';
import AddService from './components/AddService';
import Mobileapps from './components/Mobileapps'
import Footer from './components/Footer';
import {BrowserRouter} from 'react-router-dom'


function App() {
  return (
    <div className="App">
    <BrowserRouter basename='/reactproject'>
        <Header/>
        <Banner/>
        <Service/>
        <AddService/>
        <Mobileapps/>
        <Footer/>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
