import './App.css';
import { HashRouter, Routes, Route, NavLink } from 'react-router-dom';


function Main() {
  return (
    <div>
      <h1>Main</h1>
      <NavLink to="/edit">Edit</NavLink>
    </div>
  );
}


function Edit() {
  return (
    <div>
      <h1>Edit</h1>
      <NavLink to="/">Main</NavLink>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/edit" element={<Edit />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;