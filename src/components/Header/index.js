// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav>
    <div className="nav-bar-mobile-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="website-logo"
      />
      <div>
        <button type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="nav logout"
            className="logout-icon"
          />
        </button>
      </div>
    </div>

    <div className="nav-bar-large-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="website-logo"
      />
      <div className="header-container">
        <ul className="nav-menu">
          <Link to="/" className="link">
            <li className="nav-menu-item">Home</li>
          </Link>
          <Link to="/products" className="link">
            <li className="nav-menu-item">Products</li>
          </Link>
          <Link to="/cart" className="link">
            <li className="nav-menu-item">Cart</li>
          </Link>
        </ul>
        <button type="button" className="logout-button">
          Logout
        </button>
      </div>
    </div>
    <div className="nav-icons-mobile-container">
      <ul className="icons-container">
        <li className="icons">
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
              alt="nav home"
              className="icon"
            />
          </Link>
        </li>
        <li className="icons">
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
              alt="nav products"
              className="icon"
            />
          </Link>
        </li>
        <li className="icons">
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
              alt="nav home"
              className="icon"
            />
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
