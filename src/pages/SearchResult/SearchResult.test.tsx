import { render, screen } from '@testing-library/react';

/** page */
import SearchResult from './SearchResult';

test('should show SearchResult content', () => {
  render(<SearchResult />);
  const searchList = screen.getByRole('list');
  expect(searchList).toBeInTheDocument();
});
