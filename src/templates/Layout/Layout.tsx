import { Container } from 'react-grid-system';
import { Outlet } from 'react-router-dom';

/** Organisms */
import Header from '../../organisms/Header/Header';

/** Scss styles */
import './Layout.scss';

/** Template for all pages
 * @param {object} props
 */
const Layout = (): JSX.Element => (
  <>
    <Header />
    <Container>
      <main className="main_content">
        <Outlet />
      </main>
    </Container>
  </>
);

export default Layout;
