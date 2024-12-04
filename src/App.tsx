import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { ClientDashboard } from './pages/ClientDashboard';
import { TeamDashboard } from './pages/TeamDashboard';
import { ExecutiveDashboard } from './pages/ExecutiveDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/client" element={<ClientDashboard />} />
        <Route path="/team" element={<TeamDashboard />} />
        <Route path="/executive" element={<ExecutiveDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;