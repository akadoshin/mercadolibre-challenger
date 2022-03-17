import { BrowserRouter, Routes, Route } from 'react-router-dom';

/** templates */
import Layout from './templates/Layout';

/** pages */
import NotFound from './pages/NotFound';
import SearchResult from './pages/SearchResult';
import SearchBox from './pages/SearchBox';

/** available routes */
export enum ERoutes {
  PATH = '/',
  ITEMS = '/items',
}

/** name of the query params for items page */
export const ITEMS_PARAM = 'id';

/** create all the routes */
const App = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path={ERoutes.PATH} element={<Layout />}>
        <Route path={ERoutes.ITEMS} element={<SearchResult />}>
          <Route path={`:${ITEMS_PARAM}`} element={<SearchBox />} />
        </Route>
        {/* if it does not match with some path show NotFound page */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
