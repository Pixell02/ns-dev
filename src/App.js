import {BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route exact path='/' element={<Home />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
