import { render, screen } from 'test-utils';

/** Templates */
import Layout from './Layout';

test('should show Layout content', () => {
  render(<Layout />);
  const text = screen.getByRole('main');
  expect(text).toBeInTheDocument();
});
