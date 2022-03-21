import { render, screen } from 'test-utils';

/** Page */
import SearchResult from './SearchResult';

test('should show SearchResult content', () => {
  render(<SearchResult />);
  const searchList = screen.getByTestId('search_result_page');
  expect(searchList).toBeInTheDocument();
});
