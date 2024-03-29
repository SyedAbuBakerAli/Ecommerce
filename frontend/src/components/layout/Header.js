import React, { Fragment } from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'

import { logout } from '../../actions/userAction'
import { useDispatch, useSelector } from 'react-redux'

import '../../App.css'
const Header = () => {

  const dispatch = useDispatch();

  const { user, loading } = useSelector(state => state.auth)

  const logoutHandler = () => {
    dispatch(logout());
  }

  return (
    <Fragment>
      <nav className="navbar row">
        <div className="col-12 col-md-3">
          <div className="navbar-brand">
            <Link to="/">
              <img src="./images/logo.png" />
            </Link>
          </div>
        </div>

        <div className="col-12 col-md-6 mt-2 mt-md-0">
          <Search />
        </div>

        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
          <Link to="/cart" style={{ textDecoration: 'none' }}>
            <span id="cart" className="ml-3">Cart</span>
            <span className="ml-1" id="cart_count">2</span>
          </Link>


          {user ? (
            <div>
              <div className='ml-4 dropdown d-inline'>
                <Link to="#!" className='btn dropdown-toggle text-white mr-4'
                  type="button" id="dropDownMenuButton" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="true">
                  <figure className='avatar avatar-nav'>
                    <img src={user.avatar && user.avatar.url}
                      alt={user && user.name}
                      className='rounded-circle'
                    />
                  </figure>
                  <span>{user && user.name}</span>
                </Link>
                  {user && user.role !==  'admin' ? (
                    <Link className='dropdown-item text-white' to="/orders/me">
                    Orders
                  </Link>
                  ):(
                    <Link className='dropdown-item text-white' to="/dashboard">
                  DashBoard
                </Link>
                  )}
                  <Link className='dropdown-item text-white' to="/me">
                  Profile
                </Link>
                <Link className='dropdown-item text-danger' to="/" onClick={logoutHandler}>
                  Logout
                </Link>

              </div>
              </div>
                    
          ) : !loading && <Link to="/login" className="btn ml-4" id="login_btn">Login</Link>}
        </div>

      </nav>
    </Fragment>
  )
}

export default Header
