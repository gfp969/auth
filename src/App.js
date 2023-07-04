import { useAuth0 } from "@auth0/auth0-react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { Fragment } from "react";
import Logout from "./components/Logout";

function App() {

  const { isAuthenticated } = useAuth0();

  return (
    <div>
      {
        isAuthenticated ? (
          <Fragment>
            <Profile />
            <Logout />
          </Fragment>
        ) : (<Login />)
      }
    </div>

  );
}

export default App;
