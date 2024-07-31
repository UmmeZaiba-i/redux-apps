import { Menu } from 'antd';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
    return (
      <Menu mode="horizontal" style={{ lineHeight: '64px' }}>
        <Link to='/counter' style={{marginRight: '20px' }}>Counter</Link>
        <Link to='/todo'>To Do App</Link>
      </Menu>
    );
  };


export default Navbar;
