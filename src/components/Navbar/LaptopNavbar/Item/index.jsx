import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const Item = ({to, title}) => {
  const activeLink = useSelector(state => state.nav.activeLink);
  return (
    <li className={`menu-item ${activeLink === to ? 'active' : ''}`}>
      <Link to={to}>{title}</Link>
    </li>
  )
}

export default Item
