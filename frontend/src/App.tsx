import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import DeliveryCard from './DeliveryCard';

const NotFound = () => <h1>404 - Page Not Found</h1>;
const Home = () => {
  return (
    <div className="text-center p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        Welcome to Katkin!
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Please visit your
        <span className="font-semibold"> welcome page</span> to check your
        delivery status.
      </p>
      <div className="text-center">
        <a
          href="/welcome/:userId"
          className="text-indigo-600 hover:text-indigo-800 font-medium underline"
        >
          Go to your welcome page
        </a>
      </div>
    </div>
  );
};
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<DeliveryCard />} />
        <Route path="/welcome/:userId" element={<DeliveryCard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
