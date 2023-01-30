import { createContext, useState } from "react";

export const userContext = createContext({
  phoneAuth: null,
  steps: null,
  setAuthenticated: () => {},
});

export const UserProvider = ({ children }) => {
  // states
  const [phoneAuth, setPhoneAuth] = useState(false);

  const phoneAuthHandler = () => {
    console.log(phoneAuth);
    setPhoneAuth(true);
  };

  return (
    <userContext.Provider value={{ phoneAuth, phoneAuthHandler }}>
      {children}
    </userContext.Provider>
  );
};
