import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import EventCalendar from './views/eventCalendar/EventCalendar';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/calendar" />} />
      <Route path="/calendar" element={<EventCalendar />} />
    </Routes>
  );
};

export default App;
