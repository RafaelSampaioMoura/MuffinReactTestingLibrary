import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

// const MockApp = () => {
//   <Router>
//     <App />
//   </Router>;
// };

describe('#App', () => {
  test('Links tem os textos corretos', () => {
    renderWithRouter(<App />);
    const links = screen.getAllByRole('link');
    // console.log(links);
    expect(links[0]).toHaveTextContent(/home/i);
    expect(links[1]).toHaveTextContent(/about/i);
    expect(links[2]).toHaveTextContent('Favorite Pokémons');
  });

  test('Link "Home" funciona corretamente', () => {
    const { history } = renderWithRouter(<App />);

    const homeLink = screen.getByRole('link', { name: 'Home' });
    userEvent.click(homeLink);

    const { pathname } = history.location;

    expect(pathname).toBe('/');
  });

  test('Link "About" funciona corretamente', () => {
    const { history } = renderWithRouter(<App />);

    const homeLink = screen.getByRole('link', { name: 'About' });
    userEvent.click(homeLink);

    const { pathname } = history.location;

    expect(pathname).toBe('/about');
  });

  test('Link "Favorite Pokemons" funciona corretamente', () => {
    const { history } = renderWithRouter(<App />);

    const homeLink = screen.getByRole('link', { name: 'Favorite Pokémons' });
    userEvent.click(homeLink);

    const { pathname } = history.location;

    expect(pathname).toBe('/favorites');
  });

  test('URL inválida leva para "Not Found"', () => {
    const { history } = renderWithRouter(<App />);

    const URL_NOT_VALID = '/bumfuzzled';
    act(() => {
      history.push(URL_NOT_VALID);
    });

    const getNotFoundTitle = screen.getByRole('heading', {
      name: 'Page requested not found',
    });
    expect(getNotFoundTitle).toBeInTheDocument();

    const getNotFoundAltText = screen.getByAltText(
      'Pikachu crying because the page requested was not found',
    );
    expect(getNotFoundAltText).toBeInTheDocument();
  });
});
