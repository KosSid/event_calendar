import { getYear, getMonth } from 'date-fns';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import EventCalendar from './views/eventCalendar/EventCalendar';

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    const year = getYear(currentDate);
    const month = getMonth(currentDate) + 1; // Months are zero-based, so add 1
    const url = `/calendar/${year}/${month}`;
    navigate(url);
  }, [currentDate, navigate]);

  return (
    <Routes>
      <Route
        path="/calendar/:year/:month"
        element={
          <EventCalendar
            currentDate={currentDate}
            setCurrentDate={setCurrentDate}
          />
        }
      />
    </Routes>
  );
}

export default App;
