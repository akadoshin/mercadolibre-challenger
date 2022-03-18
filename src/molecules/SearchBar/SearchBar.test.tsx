import { render, screen, fireEvent } from 'test-utils';

/** lang */
import lang from '../../utils/lang.json';

/** Molecules */
import SearchBar from './SearchBar';

describe('should show SearchBar content', () => {
  test('should content search form', () => {
    render(<SearchBar />);
    const form = screen.getByRole('search');
    expect(form).toBeInTheDocument();
  });

  test('check search value', () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText(lang.molecules.search.input.placeholder) as HTMLInputElement;
    expect(input).toBeInTheDocument();

    const value = 'test';
    fireEvent.change(input, { target: { value } });
    expect(input.value).toBe(value);
  });

  test('check search autocomplete dropdown value', () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText(lang.molecules.search.input.placeholder) as HTMLInputElement;
    const value = 'test';
    fireEvent.change(input, { target: { value } });
    fireEvent.focus(input);

    const form = screen.getByRole('search');
    expect(form).toHaveClass('search-focus');

    const dropdown = screen.getByRole('list');
    expect(dropdown).toBeInTheDocument();

    const dropdownItem = dropdown.querySelector('li:nth-child(2)') as HTMLLIElement;
    expect(dropdownItem).toBeInTheDocument();

    fireEvent.click(dropdownItem);
    expect(input.value).toBe(dropdownItem.textContent);
  });
});
