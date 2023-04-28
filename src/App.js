import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './Component/Header';
import Footer from './Component/Footer';
import HomePage from './Component/HomePage';
import TransactionDetails from './Component/TransactionDetails';
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <div className="App">
      <Header/>
      <header className="App-Main-Content">
        <Routes>
          <Route path="/"  Component={HomePage}/>
          <Route path="transactions" Component={TransactionDetails}/>
        </Routes>
      </header>
      <Footer/>
    </div> 
    </BrowserRouter>
      
    </>
  );
}

export default App;
