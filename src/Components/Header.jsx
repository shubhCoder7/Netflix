import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUsers, removeUsers } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { AVATAR_LOGO, LOGO } from "../utils/constant";
// import { toggleGptSearchView } from "../utils/GptSlice";
// import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store?.user);
  // const showGptSearch = useSelector((store) => store?.gpt?.showGptSearch);

  const handleClickSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUsers({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUsers());
        navigate("/");
      }
    });

    // unsubscribe when componenet unmounts
    return () => unsubscribe();
  }, []);

  // const handleGptSearchClick = () => {
  // toggleSearchView will be do nothing
  //   dispatch(toggleGptSearchView());
  // };

  // const handleLanguageChange = (e) => {
  //   dispatch(changeLanguage(e.target.value));
  // };
  return (
    <div className="absolute w-screen p-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" alt="logo" src={LOGO} />

      {user && (
        <div className="flex my-2 mx-3 items-center">
          {/* {showGptSearch && (
            <select
              className="p-2 m-2  bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )} */}
          {/* <button
            className="px-2 py-2 mx-3 font-semibold bg-purple-400 rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home " : " Gpt Search"}
          </button> */}

          <img className="w-12  h-12" src={AVATAR_LOGO} />
          <button
            className="text-white font-bold "
            onClick={handleClickSignOut}
          >
            (sign out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
