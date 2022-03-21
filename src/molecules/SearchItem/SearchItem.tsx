import { Link } from 'react-router-dom';
import { Col, Row } from 'react-grid-system';

/** Assets */
import ShippingSmallIcon from '../../assets/icons/ic_shipping.png';
import ShippingIcon from '../../assets/icons/ic_shipping@2x.png';

/** Styles */
import './SearchItem.scss';

export type TSearchItemImg = {
  url: string;
  alt?: string;
};

export type TSearchItemProps = {
  to: string;
  title: string;
  description: string;
  shortDescription?: string;
  shipping?: boolean;
  img: string | TSearchItemImg;
};

/** Search item
 * @param {TSearchItemProps} props
 *
 * @example
 * <SearchItem to="/" title="Search item" description="Desc" img="https://via.placeholder.com/150" />
 * <SearchItem
 *      to="/"
 *      title="Search item"
 *      description="Desc"
 *      shortDescription="Country"
 *      img={{ url: 'https://via.placeholder.com/150', alt: 'Search item' }}
 *      shipping />
 */
const SearchItem = ({ to, title, description, shortDescription, shipping, img }: TSearchItemProps): JSX.Element => {
  const imgUrl = typeof img === 'string' ? img : img.url;
  /** If img does not have alt, for default use title */
  const imgAlt = typeof img === 'object' && img.alt ? img.alt : description;

  return (
    <article role="listitem" className="search_item">
      <Row nogutter>
        <Col sm={12}>
          <Link to={to} role="link" className="search_item__content-link">
            <div className="search_item__content">
              <div className="search_item__content-image">
                {/** Pending: using different image's resolutions */}
                <img loading="lazy" src={imgUrl} alt={imgAlt} srcSet={`${imgUrl} 1x, ${imgUrl} 2x`} />
              </div>
              <div className="search_item__content-text">
                <Row align="center">
                  <Col sm={9} xxl={10}>
                    <div className="search_item__content-text-container">
                      <h2 className="search_item__content-text-title">{title}</h2>
                      {shipping && (
                        <img
                          src={ShippingSmallIcon}
                          alt="shipping"
                          className="search_item__content-text-shipping"
                          srcSet={`${ShippingSmallIcon} 1x, ${ShippingIcon} 2x`}
                        />
                      )}
                    </div>
                  </Col>
                  <Col sm={3} xxl={2}>
                    <p className="search_item__content-text-short">{shortDescription}</p>
                  </Col>
                  <Col sm={8}>
                    <p className="search_item__content-text-description">{description}</p>
                  </Col>
                </Row>
              </div>
            </div>
          </Link>
        </Col>
      </Row>
    </article>
  );
};

export default SearchItem;
