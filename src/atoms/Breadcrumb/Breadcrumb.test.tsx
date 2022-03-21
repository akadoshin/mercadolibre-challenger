import { render, screen } from 'test-utils';

/** Atom */
import Breadcrumb from './Breadcrumb';

test('should show SearchResult content', () => {
  render(
    <Breadcrumb
      items={[
        { to: '/', title: 'test' },
        { to: '/', title: 'test' },
      ]}
    />
  );

  const nav = screen.getByRole('navigation');
  expect(nav).toBeInTheDocument();

  const list = screen.getByRole('list');
  expect(list).toBeInTheDocument();

  const listItemNumber = screen.getAllByRole('listitem');
  expect(listItemNumber.length).toBe(2);

  const listItem = list.querySelector('li:nth-child(2)') as HTMLLIElement;
  expect(listItem).toBeInTheDocument();

  const link = listItem.querySelector('a') as HTMLAnchorElement;
  expect(link).toBeInTheDocument();

  expect(link.textContent).toBe('test');

  const linkTo = link.getAttribute('href');
  expect(linkTo).toBe('/');
});
