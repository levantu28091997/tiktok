import { Routes, Route, Link } from "react-router-dom";
import Homepage from './pages/Home'
import Newspage from './pages/News'
import Contactpage from './pages/Contact'


function App() {

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/news" element={<Newspage/>} />
        <Route path="/contact" element={<Contactpage/>} />
      </Routes>
    </div>
  );
}

export default App;
