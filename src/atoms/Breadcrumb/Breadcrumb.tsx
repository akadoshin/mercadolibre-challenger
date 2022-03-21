import { Link } from 'react-router-dom';

/** Assets */
import ChevronIcon from '../../assets/icons/ic_chevron_right.svg';

/** Styles */
import './Breadcrumb.scss';

export type TBreadcrumbProps = {
  /** Breadcrumb items */
  items: Array<{
    /** Link to the page */
    to: string;
    /** Title of the page */
    title: string;
  }>;
};

/** Breadcrumb for navigation
 * @param {TBreadcrumbProps} props
 *
 * @example
 * <Breadcrumb items={[{ to: '/', title: 'Home' }, { to: '/', title: 'Search' }]} />
 */
const Breadcrumb = ({ items }: TBreadcrumbProps): JSX.Element => (
  <nav>
    <ul className="breadcrumb">
      {items.map((item) => (
        <li key={item.title} className="breadcrumb__item">
          <Link to={item.to} className="breadcrumb__link">
            <span className="breadcrumb__link-text">{item.title}</span>
          </Link>
          <img src={ChevronIcon} alt="Chevron right" className="breadcrumb__item-icon" />
        </li>
      ))}
    </ul>
  </nav>
);

export default Breadcrumb;
