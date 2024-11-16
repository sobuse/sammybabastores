import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './components/home/HomePage';
import SearchResults from './components/search/SearchResults';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchResults />} />
          {/* Add more routes for categories and products */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;