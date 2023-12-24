import { Link } from "react-router-dom";
const Menu = () => {
  return (

    <nav>
      <div id="menu" className="collapse navbar-collapse">
        <ul>
          <li className="menu-item"><Link to="/category" href="#">iPhone</Link></li>
          <li className="menu-item"><Link to="/category" href="#">Samsung</Link></li>
          <li className="menu-item"><Link to="/category" href="#">HTC</Link></li>
          <li className="menu-item"><Link to="/category" href="#">Nokia</Link></li>
          <li className="menu-item"><Link to="/category" href="#">Sony</Link></li>
          <li className="menu-item"><Link to="/category" href="#">Blackberry</Link></li>
        </ul>
      </div>
    </nav>

  )
}
export default Menu;