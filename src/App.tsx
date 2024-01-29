import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import EventCalendar from './pages/EventCalendar';

const App: FC = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="/calendar" />} />
      <Route path="/calendar" element={<EventCalendar />} />
      <Route path="*" element={<Navigate to="/calendar" replace />} />
    </Routes>
  );
};

export default App;
