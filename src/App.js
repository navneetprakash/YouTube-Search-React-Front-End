import Header from './components/Header/Header';
import YoutubeSearch from './components/YoutubeSearch/InputSearch';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<YoutubeSearch />} />
          <Route path='*' element={<h2>Page not found!</h2>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
