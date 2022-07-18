import { render, screen } from '@testing-library/react';
import App from './App';

test('renders demo notes app heading', () => {
  render(<App />);
  const demoNotesHeading = screen.getByText(/Demo Notes App/i);
  expect(demoNotesHeading).toBeInTheDocument();
});
