import { render, screen } from '@testing-library/react';

/** page */
import SearchResult from './SearchResult';

test('should show SearchResult content', () => {
  render(<SearchResult />);
  const text = screen.getByText('SearchResult');
  expect(text).toBeInTheDocument();
});
