import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import WeatherDisplay from '../WeatherDisplay';

describe('Weather Display App', () => {
  test('renders temperature and condition paragraph tags and span tag', () => {
    const { container } = render(<App />);
    const pTags = container.querySelectorAll('p');
    const spanTags = container.querySelectorAll('span');

    expect(pTags.length).toBe(2);
    expect(spanTags.length).toBe(1);
    expect(pTags[0].textContent).toBe('Temperature: 25');
    expect(pTags[1].textContent).toBe('Conditions: Sunny');
  });

  test('applies red color when temperature > 20', () => {
    const { container } = render(<WeatherDisplay weather={{ temperature: 25, conditions: 'Sunny' }} />);
    const span = container.querySelector('span');
    expect(span).toHaveStyle('color: red');
  });

  test('applies blue color when temperature <= 20', () => {
    const { container } = render(<WeatherDisplay weather={{ temperature: 15, conditions: 'Rainy' }} />);
    const span = container.querySelector('span');
    expect(span).toHaveStyle('color: blue');
  });
});
