import Pokedex from '../pages/Pokedex';
import renderWithRouter from '../renderWithRouter';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const mockPokemons = [
  {
    id: 25,
    name: 'Pikachu',
    type: 'Electric',
    averageWeight: {
      value: '6.0',
      measurementUnit: 'kg',
    },
    image: 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png',
    moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)',
    foundAt: [
      {
        location: 'Kanto Viridian Forest',
        map: 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png',
      },
      {
        location: 'Kanto Power Plant',
        map: 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png',
      },
    ],
    summary:
      'This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat.',
  },
  {
    id: 4,
    name: 'Charmander',
    type: 'Fire',
    averageWeight: {
      value: '8.5',
      measurementUnit: 'kg',
    },
    image: 'https://cdn2.bulbagarden.net/upload/0/0a/Spr_5b_004.png',
    moreInfo:
      'https://bulbapedia.bulbagarden.net/wiki/Charmander_(Pok%C3%A9mon)',
    foundAt: [
      {
        location: 'Alola Route 3',
        map: 'https://cdn2.bulbagarden.net/upload/9/93/Alola_Route_3_Map.png',
      },
      {
        location: 'Kanto Route 3',
        map: 'https://cdn2.bulbagarden.net/upload/4/4a/Kanto_Route_3_Map.png',
      },
      {
        location: 'Kanto Route 4',
        map: 'https://cdn2.bulbagarden.net/upload/2/24/Kanto_Route_4_Map.png',
      },
      {
        location: 'Kanto Rock Tunnel',
        map: 'https://cdn2.bulbagarden.net/upload/6/6f/Kanto_Rock_Tunnel_Map.png',
      },
    ],
    summary:
      'The flame on its tail shows the strength of its life force. If it is weak, the flame also burns weakly.',
  },
  {
    id: 148,
    name: 'Dragonair',
    type: 'Dragon',
    averageWeight: {
      value: '16.5',
      measurementUnit: 'kg',
    },
    image: 'https://cdn2.bulbagarden.net/upload/2/2c/Spr_5b_148.png',
    moreInfo:
      'https://bulbapedia.bulbagarden.net/wiki/Dragonair_(Pok%C3%A9mon)',
    foundAt: [
      {
        location: 'Johto Route 45',
        map: 'https://cdn2.bulbagarden.net/upload/2/21/Johto_Route_45_Map.png',
      },
      {
        location: "Johto Dragon's Den",
        map: 'https://cdn2.bulbagarden.net/upload/1/1e/Johto_Dragons_Den_Map.png',
      },
    ],
    summary:
      'They say that if it emits an aura from its whole body, the weather will begin to change instantly.',
  },
];

describe('#Pokedex', () => {
  test('', async () => {
    renderWithRouter(<Pokedex />);

    const getHeader = await screen.findByText('Encountered pokémons');

    expect(getHeader).toBeInTheDocument();
  });
});
