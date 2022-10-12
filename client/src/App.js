import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Layout from './components/Layout';
import RequireAuth from './components/RequireAuth';
import Applications from './pages/Applications';
import Home from './pages/Home';
import Job from './pages/Job';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route element={<RequireAuth />}>
          <Route path="/applications" element={<Applications />} />
          <Route path="/jobs/:slug" element={<Job />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
