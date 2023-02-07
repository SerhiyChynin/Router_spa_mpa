import './App.css';
import Header from './Header';
import About from './About';
import Users from './Users';
import Main from './Main';
import UserId from './UserId';
import Error from './Error';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';

function App() {
  return (
    < >
      <Router>
      <Header/>
        {/* <nav>
          <ul>
            <li><Link to="/">Main</Link></li>          //Одностраничный сайт с навигацией
            <li><Link to="/about">About</Link></li>
            <li><Link to="/users">Users</Link></li>
          </ul>
          </nav> */}
        <Routes>
          <Route exact path="/" element={<Main/>} />
          <Route exact path="/about" element ={<About/>} />
          <Route exact path="/users" element ={<Users/>} />
          <Route path="/users/:userName" element ={<UserId/>} />
          <Route path="*" element ={<Error/>} />
        </Routes>

      </Router>

    </>
  );
}

export default App;
