import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

interface ItemProps {
  to: string;
  title: string;
}

interface RootState {
  nav: {
    activeLink: string;
  };
}

const Item: React.FC<ItemProps> = ({ to, title }) => {
  const activeLink = useSelector((state: RootState) => state.nav.activeLink);

  return (
    <li className={`menu-item ${activeLink === to ? 'active' : ''}`}>
      <Link to={to}>{title}</Link>
    </li>
  );
};

export default Item;
