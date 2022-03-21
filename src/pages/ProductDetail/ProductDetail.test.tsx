import { render, screen } from 'test-utils';

/** Pages */
import ProductDetail from './ProductDetail';

test('should show ProductDetail content', () => {
  render(<ProductDetail />);
  const productDetail = screen.getByTestId('product_detail_page');
  expect(productDetail).toBeInTheDocument();
});
