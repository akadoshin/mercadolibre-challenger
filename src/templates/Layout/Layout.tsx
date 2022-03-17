import { Outlet } from 'react-router-dom';

/** template for all pages
 * @param {object} props
 */
const Layout = (): JSX.Element => (
  <div>
    <Outlet />
  </div>
);

export default Layout;
