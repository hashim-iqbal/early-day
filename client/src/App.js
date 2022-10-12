import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import RequireAuth from './components/RequireAuth';
import Applications from './pages/Applications';
import Home from './pages/Home';
import Job from './pages/Job';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Routes>
      <Route element ={<Layout />}>
        <Route path = "/" element = {<Home />} />
        <Route path = "/register" element = {<Register />} />
        <Route path = "/jobs/:slug" element = {<Job />} />
        <Route path = "/login" element = {<Login />} />
        <Route element = {<RequireAuth />}>
          <Route path = "/applications" element = {<Applications />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
