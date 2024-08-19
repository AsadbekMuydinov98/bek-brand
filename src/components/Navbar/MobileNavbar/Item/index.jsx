import { useSelector } from "react-redux";
import { Link } from "react-router-dom"

const Item = ({icon, link}) => {
  const activeLink = useSelector(state => state.nav.activeLink);
  return (
    <div className={`menu-item ${activeLink === link ? 'active' : ''}`}>
      <Link to={link}>{icon}</Link>
    </div>
  )
}

export default Item
