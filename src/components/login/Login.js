import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import firebase from 'firebase/compat/app';

import { auth } from "../firebase";

const Login = () => {
  function googleSignInHandler() {
    console.log("google sign in handler");
    auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  function facebookSignInHandler() {
    console.log("facebook sign in handler");
    auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());
  }

  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to chatApp!</h2>
        <div className="login-button google" onClick={googleSignInHandler}>
          <GoogleOutlined /> Sign In With Google
        </div>
        <br />
        <br />
        <div className="login-button facebook" onClick={facebookSignInHandler}>
          <FacebookOutlined /> Sign In With Facebook
        </div>
      </div>
    </div>
  );
};

export default Login;
