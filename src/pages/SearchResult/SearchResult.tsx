/* eslint-disable camelcase */
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

/** Atoms */
import Box from '../../atoms/Box/Box';
import Breadcrumb from '../../atoms/Breadcrumb/Breadcrumb';
import Loading from '../../atoms/Loading/Loading';

/** Molecules */
import SearchItem from '../../molecules/SearchItem/SearchItem';

/** lang */
import lang from '../../utils/lang.json';

/** Routes */
import { ERoutes, BACKEND_URL, ICategory, IProduct } from '../../App';

/** Styles */
import './SearchResult.scss';

const langText = lang.pages.searchResult;

const SearchResult = (): JSX.Element => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');

  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategory>([]);

  useEffect(() => {
    setLoading(true);

    fetch(`${BACKEND_URL}/items?q=${search}`)
      .then((res) => {
        setItems([]);
        setCategories([]);
        return res.json();
      })
      .then((data: { items: IProduct[]; categories: ICategory }) => {
        if (data.items && data.items.length > 0) {
          setItems(data.items);
        }
        if (data.categories && data.categories.length > 0) {
          setCategories(data.categories);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [search]);

  return (
    <section data-testid="search_result_page" className="search_result_page">
      <Breadcrumb items={categories.map((title) => ({ to: '/', title }))} />
      {items.length > 0 ? (
        <Box>
          {items.map(({ id, title, price: { amount, currency }, picture, free_shipping }) => (
            <SearchItem
              to={`${ERoutes.ITEMS}/${id}`}
              key={id}
              title={Number(amount).toLocaleString(navigator.language || 'es', { currency })}
              description={title}
              img={picture}
              shipping={free_shipping}
            />
          ))}
        </Box>
      ) : (
        <div>
          <div className="search_result_page-not_result">
            {loading ? <Loading /> : <h1>{langText.noResult.replace('{search}', search || '')}</h1>}
          </div>
        </div>
      )}
    </section>
  );
};

export default SearchResult;
