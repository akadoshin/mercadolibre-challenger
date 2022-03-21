import { render, screen } from 'test-utils';

/** page */
import SearchBox from './SearchBox';

test('should show SearchBox content', () => {
  render(<SearchBox />);
  const text = screen.getByTestId('search_box_page');
  expect(text).toBeInTheDocument();
});
