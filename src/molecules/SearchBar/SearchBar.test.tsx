import { render, screen, fireEvent } from 'test-utils';

/** Molecules */
import SearchBar from './SearchBar';

describe('should show SearchBar content', () => {
  test('should content search form', () => {
    render(<SearchBar />);
    const searchBox = screen.getByRole('search');
    expect(searchBox).toBeInTheDocument();
  });

  test('check search value', () => {
    render(<SearchBar />);
    const input = screen.getByRole('searchbox') as HTMLInputElement;
    expect(input).toBeInTheDocument();

    const value = 'test';
    fireEvent.change(input, { target: { value } });
    expect(input.value).toBe(value);
  });

  test('check search autocomplete dropdown value', () => {
    render(<SearchBar />);
    const input = screen.getByRole('searchbox') as HTMLInputElement;
    const value = 'test';
    fireEvent.change(input, { target: { value } });
    fireEvent.submit(input);

    fireEvent.change(input, { target: { value: 'tes' } });
    fireEvent.focus(input);

    const searchBox = screen.getByRole('search');
    expect(searchBox).toHaveClass('search-focus');

    const dropdown = screen.getByRole('list');
    expect(dropdown).toBeInTheDocument();

    const dropdownItem = dropdown.querySelector('li:nth-child(1)') as HTMLLIElement;
    expect(dropdownItem).toBeInTheDocument();

    fireEvent.click(dropdownItem);
    expect(input.value).toBe(dropdownItem.textContent);
  });
});
