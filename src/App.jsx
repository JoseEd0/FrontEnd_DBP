import './App.css';
import NavBar from './components/NavBar';
import Login from './components/login';
import Register from './components/Register';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';

function App(){
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path= "/" element={<Home />} />
          <Route path= "/login" element={<Login />} />
          <Route path= "/register" element={<Register />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;