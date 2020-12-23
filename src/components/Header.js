import { Link } from "react-router-dom"
import "../styles/Header.scss"

const Header = () => (
  <div className="header">
    <h1 className="title">
      <Link to="/">
        <img src="/logo192.png" className="logo" alt="logo" />
        Bookie
      </Link>
    </h1>
  </div>
)

export default Header
