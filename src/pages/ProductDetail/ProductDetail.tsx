import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Col, Row } from 'react-grid-system';

/** Atoms */
import Loading from '../../atoms/Loading/Loading';
import Breadcrumb from '../../atoms/Breadcrumb/Breadcrumb';
import Box from '../../atoms/Box/Box';

/** lang */
import lang from '../../utils/lang.json';

/** Interfaces */
import { BACKEND_URL, ERoutes, ICategory, IProduct } from '../../App';

/** Styles */
import './ProductDetail.scss';

const langText = lang.pages.productDetail;

const ProductDetail = (): JSX.Element => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState<IProduct>();
  const [categories, setCategories] = useState<ICategory>([]);

  useEffect(() => {
    setLoading(true);

    fetch(`${BACKEND_URL}/items/${id}`)
      .then((res) => {
        setItem(undefined);
        return res.json();
      })
      .then((data: { item: IProduct; categories: ICategory }) => {
        if (data.categories && data.categories.length > 0) {
          setCategories(data.categories);
        }

        if (Object.keys(data.item).length > 0) {
          setItem(data.item);
        } else {
          navigate(ERoutes.PATH);
        }
      })
      .catch(() => {
        navigate(ERoutes.PATH);
      })
      .finally(() => {
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section data-testid="product_detail_page" className="product_detail_page">
      <Breadcrumb items={categories.map((title) => ({ to: '/', title }))} />
      {loading ? (
        <div className="product_detail_page-loading">
          <Loading />
        </div>
      ) : (
        item && (
          <Box>
            <div className="product_detail_page__content">
              <Row>
                <Col sm={12} md={8}>
                  <div className="product_detail_page__content-picture">
                    <img src={item.picture} alt={item.title} />
                  </div>
                </Col>
                <Col sm={12} md={4}>
                  <div className="product_detail_page__content-header">
                    <span className="product_detail_page__content-header-quantity">
                      {langText.header.soldQuantity.replace('{quantity}', `${item.sold_quantity}`)}
                    </span>
                    <h1 className="product_detail_page__content-header-title">{item.title}</h1>
                    <div className="product_detail_page__content-header-price">
                      <span>
                        {Number(item.price.amount).toLocaleString(navigator.language || 'es', {
                          currency: item.price.currency,
                        })}
                      </span>
                    </div>
                    <button type="button" className="product_detail_page__content-header-button">
                      {langText.button.buy}
                    </button>
                  </div>
                </Col>
                <Col sm={12} md={8}>
                  <article className="product_detail_page__content-footer">
                    <h2 className="product_detail_page__content-footer-title">{langText.result.title}</h2>
                    <p className="product_detail_page__content-footer-description">{item.description}</p>
                  </article>
                </Col>
              </Row>
            </div>
          </Box>
        )
      )}
    </section>
  );
};

export default ProductDetail;
