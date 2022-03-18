import { render, screen } from '@testing-library/react';

/** Pages */
import ProductDetail from './ProductDetail';

test('should show ProductDetail content', () => {
  render(<ProductDetail />);
  const text = screen.getByText('ProductDetail');
  expect(text).toBeInTheDocument();
});
