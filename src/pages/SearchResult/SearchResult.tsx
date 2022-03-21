/** Atoms */
import Box from '../../atoms/Box/Box';

/** Molecules */
import SearchItem from '../../molecules/SearchItem/SearchItem';

/** Routes */
import { ERoutes } from '../../App';

const SearchResult = (): JSX.Element => (
  <section role="list">
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

export default SearchResult;
