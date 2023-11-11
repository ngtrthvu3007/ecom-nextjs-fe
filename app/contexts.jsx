import { createContext, useState } from "react";
import { getAccessTokenFromLS, getProfileUser } from "../utils/authen";

const initialAppContext = {
  isAuthenticated: false, //Boolean(getAccessTokenFromLS()),
  setIsAuthenticated: () => null,
  profile: getProfileUser(),
  setProfile: () => null,
  // extendedPurchases: [],
  // setExtendedPurchases: () => null,
  // reset: () => null,
};

export const AppContext = createContext(initialAppContext);

export const AppProvider = ({ children, defaultValue = initialAppContext }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(initialAppContext.isAuthenticated);
  const [profile, setProfile] = useState(initialAppContext.profile);
  // const [extendedPurchases, setExtendedPurchases] = useState(initialAppContext.extendedPurchases);

  const reset = () => {
    setIsAuthenticated(false);
    setExtendedPurchases([]);
    setProfile(null);
  };

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        profile,
        setProfile,
        // extendedPurchases,
        // setExtendedPurchases,
        // reset,
      }}>
      {children}
    </AppContext.Provider>
  );
};
