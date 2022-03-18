import { Outlet } from 'react-router-dom';

/** Organisms */
import Header from '../../organisms/Header/Header';

/** Template for all pages
 * @param {object} props
 */
const Layout = (): JSX.Element => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
  </>
);

export default Layout;
