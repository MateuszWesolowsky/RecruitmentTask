import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PeopleTableRow } from '../components/PeopleTableRow';
import { BrowserRouter } from 'react-router-dom';

describe('PeopleTableRow Component', () => {
  const mockData = {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    birth_year: '19BBY',
    eye_color: 'blue',
    hair_color: 'blond',
    skin_color: 'fair',
    url: 'https://swapi.dev/api/people/1/',
  };

  it('renders all data correctly', () => {
    render(
      <BrowserRouter>
        <PeopleTableRow data={mockData} />
      </BrowserRouter>,
    );

    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    expect(screen.getByText('172 cm')).toBeInTheDocument();
    expect(screen.getByText('77 kg')).toBeInTheDocument();
    expect(screen.getByText('19BBY')).toBeInTheDocument();
    expect(screen.getByText('blue')).toBeInTheDocument();
    expect(screen.getByText('blond')).toBeInTheDocument();
    expect(screen.getByText('fair')).toBeInTheDocument();
  });
});
