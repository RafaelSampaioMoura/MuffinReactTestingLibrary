import { screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';
import renderWithRouter from '../renderWithRouter';

describe('#NotFound', () => {
  test('Testa se o heading tem o testo correto', () => {
    renderWithRouter(<NotFound />);

    const getHeader = screen.getByText('Page requested not found');

    expect(getHeader).toBeInTheDocument();
  });

  test('Testa se a imagem correta aparece na tela', () => {
    renderWithRouter(<NotFound />);

    const getImg = screen.getByRole('img');

    expect(getImg).toHaveAttribute(
      'src',
      'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif',
    );
  });
});
