import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../../../redux/store';

interface ItemProps {
  icon: React.ReactNode;
  link: string;
}

const Item: React.FC<ItemProps> = ({ icon, link }) => {
  const activeLink = useSelector((state: RootState) => state.nav.activeLink);

  return (
    <div className={`menu-item ${activeLink === link ? 'active' : ''}`}>
      <Link to={link}>
        {icon}
      </Link>
    </div>
  );
};

export default Item;
