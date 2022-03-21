import { render, screen } from 'test-utils';

/** Atom */
import Loading from './Loading';

test('should show Box content', () => {
  render(<Loading />);
  const loading = screen.getByTestId('loading');
  expect(loading).toBeInTheDocument();
});
