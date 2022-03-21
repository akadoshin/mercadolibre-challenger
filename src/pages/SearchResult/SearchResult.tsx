import { useSearchParams } from 'react-router-dom';

/** Atoms */
import Box from '../../atoms/Box/Box';
import Breadcrumb from '../../atoms/Breadcrumb/Breadcrumb';

/** Molecules */
import SearchItem from '../../molecules/SearchItem/SearchItem';

/** Routes */
import { ERoutes } from '../../App';

const SearchResult = (): JSX.Element => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');

  console.log(search);

  return (
    <section data-testid="search_result_page">
      <Breadcrumb
        items={[
          { to: '/', title: 'test' },
          { to: '/', title: 'test 2' },
          { to: '/', title: 'test 3' },
        ]}
      />
      <Box>
        {['$ 1.502', '$ 5.102', '$ 10.002', '$ 1.002'].map((title) => (
          <SearchItem
            to={`${ERoutes.ITEMS}/MLA${title}`}
            key={title}
            title={title}
            description="Apple Ipod Touch 5g 16gb Negro Igual a Nuevo Completo Unico!"
            img={`https://picsum.photos/90/90?random=${Math.random()}`}
            shipping
          />
        ))}
      </Box>
    </section>
  );
};

export default SearchResult;
