import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "List of Pokemons" ', () => {
  render(<App />);
  const linkElement = screen.getByText(/List of Pokemones/i);
  expect(linkElement).toBeInTheDocument();
});
