import {useLocation} from 'react-router-dom';
import { NavLink } from "react-router-dom";

function Users() {
  let url = useLocation();
  return (
    < >
      <h1>Users</h1>
      <ul>
        <li><NavLink to={`${url.pathname}/Mishigin`}>Mishigin</NavLink></li>
        <li><NavLink to={`${url.pathname}/Yosup`}>Yosup</NavLink></li>
      </ul>
    </>
  );
}

export default Users;
