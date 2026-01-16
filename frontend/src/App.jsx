import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import RegistrationForm from './components/RegistrationForm';
import 'antd/dist/reset.css'; // Import Ant Design styles
import './App.css'; // Keep existing styles if any are still relevant, or rely on Antd

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<RegistrationForm />} />
          <Route path="/register" element={<RegistrationForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
