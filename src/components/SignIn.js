// Define SignIn.js React component
// Import necessary modules
// use const instead of var so variable is static type
import React, { PropTypes } from 'react';
import './SignIn.css';

const SignIn = ({ signIn }) => {
  return (
    <div className="SignIn">
      <button
        className="block"
        onClick={signIn}
      >
        Sign In
      </button>
    </div>
  );
};

SignIn.propTypes = {
  signIn: PropTypes.func
};

export default SignIn;
