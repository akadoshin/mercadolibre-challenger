import { render, screen } from 'test-utils';

/** Pages */
import ProductDetail from './ProductDetail';

test('should show ProductDetail content', () => {
  render(<ProductDetail />);
  const text = screen.getByText('ProductDetail');
  expect(text).toBeInTheDocument();
});
