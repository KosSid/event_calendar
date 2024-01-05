import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import EventCalendar from './pages/EventCalendar';
import CompoundCounter2 from './pages/Counter2';

const App: FC = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="/calendar" />} />
      <Route path="/calendar" element={<EventCalendar />} />
      <Route path="/counter" element={<CompoundCounter2 />} />
    </Routes>
  );
};

export default App;
