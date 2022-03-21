import { render, screen } from 'test-utils';

/** page */
import SearchBox from './SearchBox';

test('should show SearchBox content', () => {
  render(<SearchBox />);
  const text = screen.getByText('SearchBox');
  expect(text).toBeInTheDocument();
});
