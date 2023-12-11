import './App.css';
import Login from './components/Login'
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path='/' element={[<Header />,<Login/>]}/>
          <Route path='/home' element={[<Header />,<Home/>]}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
