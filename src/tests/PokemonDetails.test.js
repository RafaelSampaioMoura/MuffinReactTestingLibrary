import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('#PokemonDetails', () => {
  test('', () => {
    const { history } = renderWithRouter(<App />);
    const detailsLink = screen.queryByRole('link', { name: /more details/i });
    userEvent.click(detailsLink);

    expect(history.location.pathname).toBe('/pokemons/25');

    const detailsHeading = screen.getByRole('heading', { name: /details/i });
    // console.log(detailsHeading);
    expect(detailsHeading).toBeInTheDocument();
    expect(detailsLink).not.toBeInTheDocument();

    const summaryHeading = screen.getByRole('heading', { name: /summary/i });

    expect(summaryHeading).toBeInTheDocument();

    const pikachuDetails = /This intelligent Pokémon roasts hard berries with/i;
    const detailsParagraph = screen.getByText(pikachuDetails);

    expect(detailsParagraph).toBeInTheDocument();
  });

  test('', () => {
    const { history } = renderWithRouter(<App />);
    const detailsLink = screen.queryByRole('link', { name: /more details/i });
    userEvent.click(detailsLink);

    expect(history.location.pathname).toBe('/pokemons/25');

    const mapHeading = screen.getByRole('heading', {
      name: /game locations of/i,
    });

    expect(mapHeading).toBeInTheDocument();

    const mapImg = screen.getAllByAltText(/location/i);
    mapImg.forEach((map) => {
      expect(map).toBeInTheDocument();
      expect(map).toHaveAttribute('src');
    });

    expect(mapImg[0].src).toBe(
      'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png',
    );

    expect(mapImg[1].src).toBe(
      'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png',
    );

    const favoriteCheck = screen.getByRole('checkbox', {
      name: 'Pokémon favoritado?',
    });

    expect(favoriteCheck).toBeInTheDocument();
    userEvent.click(favoriteCheck);
    const favoritePokemon = screen.queryByAltText(/is marked as favorite/i);
    // console.log(favoritePokemon);
    expect(favoritePokemon).toBeInTheDocument();
    userEvent.click(favoriteCheck);
    expect(favoritePokemon).not.toBeInTheDocument();
  });
});
