import { Container } from 'react-grid-system';
import { Link } from 'react-router-dom';

/** Molecules */
import SearchBar from '../../molecules/SearchBar/SearchBar';

/** Routes */
import { ERoutes } from '../../App';

/** Scss styles */
import './Header.scss';

const imageUrl = '/images/Logo_ML.png';

const Header = (): JSX.Element => (
  <header className="header">
    <Container>
      <div className="header__content">
        <h1 className="header__content-title">
          <Link to={ERoutes.PATH}>
            <img src={imageUrl} alt="Mercadolibre" className="header__content-logo" />
          </Link>
        </h1>
        <div className="header__content-search">
          <SearchBar />
        </div>
      </div>
    </Container>
  </header>
);

export default Header;
