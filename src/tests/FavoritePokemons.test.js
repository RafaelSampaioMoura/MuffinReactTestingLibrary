import { act, render, screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import FavoritePokemons from '../pages/FavoritePokemons';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('#FavoritePokemons', () => {
  test('Testa se "No favorite pokemon found" aparece na tela', () => {
    renderWithRouter(<FavoritePokemons />);

    const errorTest = screen.getByText('No favorite pokemon found');
    expect(errorTest).toBeInTheDocument();
    // console.log(errorTest);
  });

  test('Testa se os favoritos aparecem na tela', () => {
    renderWithRouter(<App />);

    const detailsLink = screen.getByText('More details');
    // console.log(detailsLink);
    userEvent.click(detailsLink);

    const getCheckbox = screen.getByRole('checkbox');
    // console.log(getCheckbox);
    userEvent.click(getCheckbox);

    const favoritesLink = screen.getByRole('link', {
      name: 'Favorite Pokémons',
    });
    // console.log(favoritesLink);
    userEvent.click(favoritesLink);

    const getPokemonName = screen.getByTestId('pokemon-name');
    const getPokemonType = screen.getByTestId('pokemon-type');
    const getPokemonWeight = screen.getByTestId('pokemon-weight');

    expect(getPokemonName).toBeInTheDocument();
    expect(getPokemonType).toBeInTheDocument();
    expect(getPokemonWeight).toBeInTheDocument();
  });
});
