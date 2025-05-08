import OldNavBar from '@components/Home/OldNavBar';
import { Outlet } from 'react-router-dom';
import Home from '@components/Pages/Home';


const Layout = () => {
    return (
        <>
          <OldNavBar />
          <main>
            <Outlet />
          </main>
        </>
    )
};

export default Layout;