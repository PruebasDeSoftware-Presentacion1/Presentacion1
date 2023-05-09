import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import DailyWorkout from './views/DailyWorkout';
import CustomPlans from './views/CustomPlans';
import Exercises from './views/Exercises';
import HomePage from './views/HomePage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/daily-workout" element={<DailyWorkout />} />
        <Route path="/custom-plans" element={<CustomPlans />} />
        <Route path="/exercises" element={<Exercises />} />
      </Routes>
    </Router>
  );
}

export default App;
