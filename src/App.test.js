// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders EdgeAlpha title', () => {
    render(<App />);
    const titleElement = screen.getByText(/EdgeAlpha/i);
    expect(titleElement).toBeInTheDocument();
});
