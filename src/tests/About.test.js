import About from '../pages/About';
import { render, screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';

describe('Teste se a página contém as informações sobre a Pokédex', () => {
  test('Teste se a página contém um heading com o texto About Pokédex', () => {
    renderWithRouter(<About />);

    const pokedexHeader = screen.getByRole('heading', {
      name: 'About Pokédex',
    });
    expect(pokedexHeader).toBeInTheDocument();
  });

  test('Teste se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    renderWithRouter(<About />);

    const paragraphOne =
      'This application simulates a Pokédex,' +
      ' a digital encyclopedia containing all Pokémons';

    const paragraphTwo =
      'One can filter Pokémons by type, ' +
      'and see more details for each one of them';

    const pokedexParagraphOne = screen.getByText(paragraphOne);
    const pokedexParagraphTwo = screen.getByText(paragraphTwo);

    expect(pokedexParagraphOne).toBeInTheDocument();
    expect(pokedexParagraphTwo).toBeInTheDocument();
  });

  test('Teste se a página contém a imagem correta de uma Pokédex', () => {
    renderWithRouter(<About />);

    const image = screen.getByAltText('Pokédex');

    const THE_URL =
      'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';

    expect(image).toHaveAttribute('src', THE_URL);
  });
});
