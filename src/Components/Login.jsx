import { useRef, useState } from "react";
import Header from "./Header";
import checkValidate from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { AVATAR_LOGO, BG_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUsers } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignUpForm] = useState(true);
  const [checkError, setCheckError] = useState(null);
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleClicked = () => {
    const message = checkValidate(email.current.value, password.current.value);
    setCheckError(message);
    if (message) return;

    if (!isSignInForm) {
      // sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: AVATAR_LOGO,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = user;
              dispatch(
                addUsers({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setCheckError(errorCode + " " + errorMessage);
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setCheckError(errorCode + " " + errorMessage);
        });
    }
  };

  const toggleSignUp = () => {
    setIsSignUpForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute  ">
        <img src={BG_URL} alt="bg-logo" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12  mx-auto my-32 right-0 left-0 absolute p-16 bg-black text-white font-semibold rounded-lg bg-opacity-80 "
      >
        <h1 className="text-3xl p-4">
          {!isSignInForm ? "Sign Up" : "Sign In"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Enter Your Name"
            className="p-3 w-full text-center my-2  bg-gray-700 rounded-md bg-opacity-80 placeholder:text-white "
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Enter your Email "
          className="p-3 w-full text-center my-2 bg-gray-700 rounded-md bg-opacity-80 placeholder:text-white "
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 w-full text-center my-2 bg-gray-700 rounded-md bg-opacity-80  placeholder:text-white"
        />
        <button
          className="p-2 w-full text-center my-2 bg-red-600 rounded-md cursor-pointer hover:bg-red-700 placeholder:text-white"
          onClick={handleClicked}
        >
          {!isSignInForm ? "Sign Up" : "Sign In"}
        </button>
        <p className="my-1 text-red-500 font-semibold">{checkError}</p>
        <div className="text-center my-2">
          <h1>OR</h1>
          <p className="p-2 my-2 cursor-pointer" onClick={toggleSignUp}>
            {!setIsSignUpForm
              ? "Already a Member? Sign in now."
              : "New to Netflix? sign up now."}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
