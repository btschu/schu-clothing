import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";

import { ReactComponent as SchuLogo } from "../../assets/SchuClothing.svg";
// import { signOutUser } from '../../utils/firebase/firebase.utils';

import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  // console.log(currentUser);

  // const signOutHandler = async () => {
  //   await signOutUser(currentUser);
  //   setCurrentUser(null);
  // }

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <SchuLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>

          {currentUser ? (
            <span className='nav-link'>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
