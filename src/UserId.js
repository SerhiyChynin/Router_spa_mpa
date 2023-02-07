import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

function UserId() {
    let {userName} = useParams();
    return (
        <div>
            <NavLink to="/users">Come Back</NavLink>
            <h1>User: {userName} </h1>
        </div>
    )
}

export default UserId;