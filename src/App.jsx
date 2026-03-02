import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Catalog_card from './pages/Catalog_card'


function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a" element={<Catalog_card />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;