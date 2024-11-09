import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { RootState } from '../types/store';
import PeoplePage from './pages/PeoplePage';
import PlanetsPage from './pages/PlanetsPage';
import StarshipsPage from './pages/StarshipsPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import Navbar from './Navbar';
import PersonDetails from './pages/PersonDetails';

const App: React.FC = () => {
  const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated); // Проверка авторизации

  return (
    <Router>
      {isAuthenticated && <Navbar />} {}

      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={isAuthenticated ? <Navigate to="/main" /> : <LoginPage />} />
          <Route path="/main" element={isAuthenticated ? <MainPage /> : <Navigate to="/login" />} />
          <Route path="/people" element={isAuthenticated ? <PeoplePage /> : <Navigate to="/login" />} />
          <Route path="/people/:name" element={<PersonDetails />} /> {/* Вложенный маршрут для деталей */}
          <Route path="/planets" element={isAuthenticated ? <PlanetsPage /> : <Navigate to="/login" />} />
          <Route path="/starships" element={isAuthenticated ? <StarshipsPage /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;