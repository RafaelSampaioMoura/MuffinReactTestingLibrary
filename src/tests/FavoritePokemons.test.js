import { act, render, screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import FavoritePokemons from '../pages/FavoritePokemons';
import App from '../App';

describe('#FavoritePokemons', () => {
  test('Testa se "No favorite pokemon found" aparece na tela', () => {
    renderWithRouter(<FavoritePokemons />);

    const errorTest = screen.getByText('No favorite pokemon found');
    expect(errorTest).toBeInTheDocument();
    // console.log(errorTest);
  });

  test('Testa se os favoritos aparecem na tela', () => {
    renderWithRouter(<App />)
  })
});
