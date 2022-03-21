import { render, screen } from 'test-utils';

/** Molecules */
import SearchItem from './SearchItem';

describe('should content search item', () => {
  test('checking basic render', () => {
    render(<SearchItem to="/" title="test" description="test desc" img="https://via.placeholder.com/180" />);
    const searchItem = screen.getByRole('listitem');
    expect(searchItem).toBeInTheDocument();
  });

  test('checking img prop', () => {
    render(<SearchItem to="/" title="test" description="test desc" img={{ url: 'https://via.placeholder.com/180' }} />);
    const searchItem = screen.getByRole('listitem');
    expect(searchItem).toBeInTheDocument();
  });

  test('checking img prop with alt', () => {
    render(
      <SearchItem
        to="/"
        title="test"
        description="test desc"
        img={{ url: 'https://via.placeholder.com/180', alt: 'test image alt' }}
      />
    );
    const searchItem = screen.getByRole('listitem');
    expect(searchItem).toBeInTheDocument();

    const image = screen.getByAltText('test image alt') as HTMLImageElement;
    expect(image.src).toContain('https://via.placeholder.com/180');
  });

  test('checking props', () => {
    render(
      <SearchItem
        to="/"
        title="test"
        description="test desc"
        img="https://via.placeholder.com/180"
        shortDescription="shortDescription test"
        shipping
      />
    );

    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();

    const image = screen.getByAltText('test desc') as HTMLImageElement;
    expect(image.src).toContain('https://via.placeholder.com/180');

    const shippingIcon = screen.getByAltText('shipping');
    expect(shippingIcon).toBeInTheDocument();

    const title = screen.getByText('test');
    expect(title).toBeInTheDocument();

    const description = screen.getByText('test desc');
    expect(description).toBeInTheDocument();

    const shortDescription = screen.getByText('shortDescription test');
    expect(shortDescription).toBeInTheDocument();
  });
});
