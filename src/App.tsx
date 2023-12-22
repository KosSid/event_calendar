import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import EventCalendar from './pages/EventCalendar';

const App: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="/calendar" />} />
      <Route path="/calendar" element={<EventCalendar />} />
    </Routes>
  );
};

export default App;
