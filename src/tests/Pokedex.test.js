import Pokedex from '../pages/Pokedex';
import renderWithRouter from '../renderWithRouter';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('#Pokedex', () => {
  test('Header tem o texto correto', () => {
    renderWithRouter(<App />);

    const getHeader = screen.getByRole('heading', {
      name: 'Encountered pokémons',
    });
    // console.log(getHeader);
    expect(getHeader).toBeInTheDocument();
  });

  test('Os filtros funcionam corretamente', () => {
    renderWithRouter(<App />);

    const getPokemonName = screen.getByTestId('pokemon-name');
    const getPokemonType = screen.getByTestId('pokemon-type');
    const getPokemonWeight = screen.getByTestId('pokemon-weight');

    expect(getPokemonName).toHaveTextContent('Pikachu');
    expect(getPokemonType).toHaveTextContent('Electric');
    expect(getPokemonWeight).toHaveTextContent('Average weight: 6.0 kg');

    const nextPokemonBtn = screen.getByRole('button', {
      name: 'Próximo pokémon',
    });
    // console.log(nextPokemonBtn);
    userEvent.click(nextPokemonBtn);

    expect(getPokemonName).toHaveTextContent('Charmander');
    expect(getPokemonType).toHaveTextContent('Fire');
    expect(getPokemonWeight).toHaveTextContent('Average weight: 8.5 kg');

    userEvent.click(nextPokemonBtn);
    userEvent.click(nextPokemonBtn);
    userEvent.click(nextPokemonBtn);
    userEvent.click(nextPokemonBtn);
    userEvent.click(nextPokemonBtn);
    userEvent.click(nextPokemonBtn);
    userEvent.click(nextPokemonBtn);

    expect(getPokemonName).toHaveTextContent('Dragonair');
    expect(getPokemonType).toHaveTextContent('Dragon');
    expect(getPokemonWeight).toHaveTextContent('Average weight: 16.5 kg');

    userEvent.click(nextPokemonBtn);

    expect(getPokemonName).toHaveTextContent('Pikachu');
    expect(getPokemonType).toHaveTextContent('Electric');
    expect(getPokemonWeight).toHaveTextContent('Average weight: 6.0 kg');

    // console.log(getPokemonName);
  });

  test('A quantidade correta de botões é renderizada na tela', () => {
    renderWithRouter(<App />);

    const getPokemonNames = screen.getAllByTestId('pokemon-name');
    const getPokemonTypes = screen.getAllByTestId('pokemon-type');
    const getPokemonWeights = screen.getAllByTestId('pokemon-weight');

    expect(getPokemonNames.length).toBe(1);
    expect(getPokemonTypes.length).toBe(1);
    expect(getPokemonWeights.length).toBe(1);
  });

  test('Os botões não se repetem', () => {
    renderWithRouter(<App />);
    const filterBtns = screen.getAllByTestId('pokemon-type-button');
    const magicNumber = 7;

    expect(filterBtns.length).toBe(magicNumber);

    const isDuplicate = filterBtns.some((button) => {
      if (filterBtns.indexOf(button) !== filterBtns.lastIndexOf(button)) {
        return true;
      }
    });

    expect(isDuplicate).toBeFalsy();
  });

  test('Os botões filtram corretamente', () => {
    renderWithRouter(<App />);
    const filterBtns = screen.getAllByTestId('pokemon-type-button');

    filterBtns.forEach((button) => {
      const getPokemonType = screen.getByTestId('pokemon-type');
      const allBtn = screen.getByRole('button', { name: 'All' });
      userEvent.click(button);
      // console.log(button.innerHTML);
      expect(getPokemonType).toHaveTextContent(button.innerHTML);
      expect(allBtn).toBeInTheDocument();
    });
  });

  test('O botão All reseta o filtro e renderiza na tela', () => {
    renderWithRouter(<App />);
    const allBtn = screen.getByRole('button', { name: 'All' });
    const fireBtn = screen.getByRole('button', { name: 'Fire' });

    expect(allBtn).toBeInTheDocument();

    const getPokemonType = screen.getByTestId('pokemon-type');

    expect(getPokemonType).toHaveTextContent('Electric');

    userEvent.click(fireBtn);

    expect(getPokemonType).toHaveTextContent('Fire');

    userEvent.click(allBtn);

    expect(getPokemonType).toHaveTextContent('Electric');
  });
});
