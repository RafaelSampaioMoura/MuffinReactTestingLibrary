import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('#Pokemon', () => {
  test('A página renderiza corretamente.', () => {
    const { history } = renderWithRouter(<App />);

    const moreDetailsLink = screen.getByRole('link', { name: 'More details' });

    expect(moreDetailsLink).toBeInTheDocument();
    // console.log(moreDetailsLink);
    userEvent.click(moreDetailsLink);

    expect(history.location.pathname).toBe('/pokemons/25');

    const pokemonName = screen.getByText('Pikachu');
    const pokemonType = screen.getByText('Electric');
    const pokemonWeight = screen.getByText(
      /Average weight: [+-]?([0-9]*[.])?[0-9]+ kg/i,
    );
    const pokemonImage = screen.getByAltText(/ sprite/i);
    // console.log(pokemonWeight);
    // console.log(pokemonImage);

    expect(pokemonName).toBeInTheDocument();
    expect(pokemonType).toBeInTheDocument();
    expect(pokemonWeight).toBeInTheDocument();
    expect(pokemonImage.src).toBe(
      'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png',
    );

    const favoriteCheck = screen.getByRole('checkbox');
    // console.log(favoriteCheck);

    userEvent.click(favoriteCheck);

    const favoriteStar = screen.getByAltText('Pikachu is marked as favorite');

    expect(favoriteStar).toBeInTheDocument();
    expect(favoriteStar.src).toBe('http://localhost/star-icon.svg');
  });
});
