import { useAuth0 } from "@auth0/auth0-react";
import Loader from "./Loader";

const LoginButton = () => {
  const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <button>
        <Loader />
      </button>
    );
  }

  if (isAuthenticated) {
    return (
      <button
        className="logoutButton"
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Log Out
      </button>
    );
  }

  return (
    <button className="loginButton" onClick={() => loginWithRedirect()}>
      Log In
    </button>
  );
};

export default LoginButton;
