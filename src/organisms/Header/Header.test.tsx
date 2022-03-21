import { render, screen } from 'test-utils';

/** Organisms */
import Header from './Header';

describe('should show Header content', () => {
  test('should content Header tag', () => {
    render(<Header />);
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });

  test('should content MELI icon', () => {
    render(<Header />);
    const logo = screen.getByAltText('Mercadolibre');
    expect(logo).toBeInTheDocument();
  });

  test('check if search exists', () => {
    render(<Header />);
    const searchComponent = screen.getByRole('search');
    expect(searchComponent).toBeInTheDocument();
  });
});
