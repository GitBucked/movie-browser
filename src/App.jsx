import "./css/App.css"
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Favorites from './pages/Favorites';
import NavBar from "./components/NavBar";
import {MovieProvider} from './context/MovieContext';

function App() {
  return (
    <MovieProvider>
      <NavBar />
    <main className="main-content">
      <Routes>
        {/* Route for Home page */}
        <Route path="/" element={<Home />} />
        
        {/* Route for Favorites page */}
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </main>
    </MovieProvider>
  );
}

export default App;