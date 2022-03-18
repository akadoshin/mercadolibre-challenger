import { Col, Container, Row } from 'react-grid-system';
import { Link } from 'react-router-dom';

/** Molecules */
import SearchBar from '../../molecules/SearchBar/SearchBar';

/** Assets */
import logo from '../../assets/images/Logo_ML.png';

/** Routes */
import { ERoutes } from '../../App';

/** Scss styles */
import './Header.scss';

const Header = (): JSX.Element => (
  <header className="header">
    <Container>
      <Row align="center">
        <Col xs={2} offset={{ md: 1 }} md={1}>
          <h1 className="header__title">
            <Link to={ERoutes.PATH}>
              <img src={logo} alt="logo" className="header__logo" />
            </Link>
          </h1>
        </Col>
        <Col xs={10} md={9}>
          <SearchBar />
        </Col>
      </Row>
    </Container>
  </header>
);

export default Header;
