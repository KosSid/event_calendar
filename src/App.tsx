import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import EventCalendar from './pages/EventCalendar';
import CompoundCounter from './pages/Counter';

const App: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="/calendar" />} />
      <Route path="/calendar" element={<EventCalendar />} />
      <Route path="/counter" element={<CompoundCounter />} />
    </Routes>
  );
};

export default App;
