// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders GlimpseChase title', () => {
    render(<App />);
    const titleElement = screen.getByText(/GlimpseChase/i);
    expect(titleElement).toBeInTheDocument();
});
