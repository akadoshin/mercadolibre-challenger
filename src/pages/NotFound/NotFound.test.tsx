import { render, screen } from 'test-utils';

/** page */
import NotFound from './NotFound';

test('should show notFound content', () => {
  render(<NotFound />);
  const text = screen.getByText('NotFound');
  expect(text).toBeInTheDocument();
});
