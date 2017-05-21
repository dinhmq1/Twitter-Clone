// Define SignIn.js React component
// Import necessary modules
// use const instead of var so variable is static type
import React, { PropTypes } from 'react';
import './SignIn.css';

const SignIn = ({ signIn }) => {
  return (
    <div className="SignInPageBg">
      <div className="SignIn z-depth-1">
      <div className="SignInLogo">
      <h1>Twitter Clone</h1>
        <img src="http://app.chatterspot.com/UploadedImages/5eeb2075-47c7-4053-ad92-68ee14159d0b.png" alt="twitter logo" height="100"/>
              <button
        className="BtnSignIn"
        onClick={signIn}
      >
        Sign In
      </button>
          </div>
      </div>
    </div>
  );
};

SignIn.propTypes = {
  signIn: PropTypes.func
};

export default SignIn;
