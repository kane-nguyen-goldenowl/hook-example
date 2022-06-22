import React from "react";
import {
  useContext,
  useState
} from 'react';
import {
  useLocation,
  useNavigate
} from 'react-router-dom';

const AuthContext = React.createContext({
  auth: false,
  setAuth: () => { },
  profile: {},
  setProfile: () => { },
  handleLoginSuccess: () => { },
});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [profile, setProfile] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLoginSuccess = (profile) => {
    setProfile(profile);
    setAuth(true);

    const origin = location.state?.from?.pathname || '/profile';
    navigate(origin);
  }

  const handleLogoutSuccess = (profile) => {
    setProfile({});
    setAuth(false);

    navigate('/');
  }

  const value = {
    auth,
    setAuth,
    profile,
    setProfile,
    handleLoginSuccess,
    handleLogoutSuccess
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext);
}

export default AuthContext;