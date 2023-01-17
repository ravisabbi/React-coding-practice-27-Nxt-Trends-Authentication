// Write your JS code here
import './index.css'

const Header = () => (
  <nav>
    <div className="logo-section">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="website-logo"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        alt="nav logout"
        className="logout-icon"
      />
      <ul className="nav-text-items-list">
        <li className="nav-text-item">Home</li>
        <li className="nav-text-item">Products</li>
        <li className="nav-text-item">Cart</li>
        <li>
          <button className="logout-btn" type="button">
            LogOut
          </button>
        </li>
      </ul>
    </div>
    <ul className="icons-container">
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          alt="nav home"
          className="nav-icon"
        />
      </li>
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          alt="nav products"
          className="nav-icon"
        />
      </li>
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          alt="nav cart"
          className="nav-icon"
        />
      </li>
    </ul>
  </nav>
)

export default Header
