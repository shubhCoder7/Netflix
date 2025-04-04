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
            })
            .catch(() => {
              // An error occurred
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
        .then(() => {
          // Signed in
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
      <div className="absolute w-full h-screen">
        <img
          className="h-full w-full object-cover"
          src={BG_URL}
          alt="bg-logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-[90%] sm:w-[450px] md:w-[400px] mx-auto my-16 md:my-32 right-0 left-0 absolute p-8 md:p-12 bg-black text-white font-semibold rounded-lg bg-opacity-80"
      >
        <h1 className="text-3xl font-bold mb-6 text-center sm:text-left">
          {!isSignInForm ? "Sign Up" : "Sign In"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Enter Your Name"
            className="p-3 w-full my-4 bg-gray-700 rounded-md bg-opacity-80 placeholder:text-gray-300"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Enter your Email"
          className="p-3 w-full my-4 bg-gray-700 rounded-md bg-opacity-80 placeholder:text-gray-300"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 w-full my-4 bg-gray-700 rounded-md bg-opacity-80 placeholder:text-gray-300"
        />
        <button
          className="p-3 w-full my-6 bg-red-600 rounded-md cursor-pointer hover:bg-red-700 transition-colors font-bold"
          onClick={handleClicked}
        >
          {!isSignInForm ? "Sign Up" : "Sign In"}
        </button>
        {checkError && (
          <p className="my-2 text-red-500 font-semibold">{checkError}</p>
        )}
        <div className="text-center mt-6">
          <p className="text-gray-400 mb-2">OR</p>
          <p className="cursor-pointer hover:underline" onClick={toggleSignUp}>
            {!isSignInForm
              ? "Already a Member? Sign in now."
              : "New to Netflix? Sign up now."}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
