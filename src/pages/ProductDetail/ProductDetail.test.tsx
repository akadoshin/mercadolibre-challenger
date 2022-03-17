import { render, screen } from '@testing-library/react';

/** page */
import ProductDetail from './ProductDetail';

test('should show ProductDetail content', () => {
  render(<ProductDetail />);
  const text = screen.getByText('ProductDetail');
  expect(text).toBeInTheDocument();
});
