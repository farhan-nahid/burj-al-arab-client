import { Button } from "@material-ui/core";
import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router";
import { firebaseConfig } from "../../../firebase.config";
import { userContext } from '../../App';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const history = useHistory()
    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/" } };
  const handelGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const {displayName , email} = result.user;
        const SignedInUser = {name : displayName, email }
        setLoggedInUser (SignedInUser)
        history.replace(from)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        console.log(errorCode, errorMessage, email, credential);
        // ...
      });
  };


  return (
    <div>
      <h1>This is Login</h1>
      <Button  onClick={handelGoogleSignIn}  variant="contained"  color="secondary"  >  
      Sign In With Google
       </Button>
    </div>
  );
};

export default Login;
