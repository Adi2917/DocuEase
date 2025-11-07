import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Advertising from './pages/Advertising';
import Contact from './pages/Contact';

// Optional: Service pages
import Graphics from './pages/Graphics';
import Software from './pages/Software';
import Consultancy from './pages/Consultancy';
import Docuease from './pages/Docuease';
import Loan from './pages/Loan';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/advertising" element={<Advertising />} />
        <Route path="/contact" element={<Contact />} />

        {/* Service Pages */}
        <Route path="/graphics" element={<Graphics />} />
        <Route path="/software" element={<Software />} />
        <Route path="/consultancy" element={<Consultancy />} />
        <Route path="/docuease" element={<Docuease />} />
        <Route path="/loan" element={<Loan />} />

        {/* Optional: catch-all route for 404 */}
        <Route
          path="*"
          element={
            <div style={{ padding: '2rem', textAlign: 'center' }}>
              <h1>404 - Page Not Found</h1>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
