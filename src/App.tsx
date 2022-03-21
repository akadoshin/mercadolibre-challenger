import { BrowserRouter, Routes, Route } from 'react-router-dom';

/** templates */
import Layout from './templates/Layout/Layout';

/** pages */
import NotFound from './pages/NotFound/NotFound';
import SearchResult from './pages/SearchResult/SearchResult';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import SearchBox from './pages/SearchBox/SearchBox';

/** available routes */
export enum ERoutes {
  PATH = '/',
  ITEMS = '/items',
}

/** name of the query params for items page */
export const ITEMS_PARAM = 'id';

/** Backend url */
export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export interface IPrice {
  currency: string;
  amount: number;
  decimals: number;
}

export interface IProduct {
  id: string;
  title: string;
  price: IPrice;
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity: number;
  description: string;
}

export type ICategory = string[];

/** create all the routes */
const App = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path={ERoutes.PATH} element={<Layout />}>
        <Route index element={<SearchBox />} />

        <Route path={ERoutes.ITEMS}>
          <Route index element={<SearchResult />} />
          <Route path={`:${ITEMS_PARAM}`} element={<ProductDetail />} />
        </Route>
        {/* if it does not match with some path show NotFound page */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
