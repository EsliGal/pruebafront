import './App.css';
import Navbar from './component/navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import HomeScreen from './screen/homeScreen';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container mt-3'>
        <Routes>
          <Route index path="/" element={<HomeScreen />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
