const checkValidate = (email, password) => {
  const isEmailId = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );

  if (!isEmailId) return "Pls enter valid email id";
  if (!isPassword) return "pls enter valid password";
  return null;
};

export default checkValidate;
