import { render, screen } from 'test-utils';

/** Atom */
import Box from './Box';

test('should show Box content', () => {
  render(<Box>test text</Box>);
  const boxChild = screen.getByText('test text');
  expect(boxChild).toBeInTheDocument();
});
