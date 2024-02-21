import Register from './Register';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
