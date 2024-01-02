import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store';

interface RootState {
  auth: {
    isAuthenticated: boolean;
  };
}

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated);

  const handleLogout = () => {
    dispatch(authActions.logout());
  };
  return (
    <header>
      <h1>redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>hello</li>
            <li>hi</li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
