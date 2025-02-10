import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { CharacterDetails } from '../components/CharacterDetails';

vi.mock('../components/ErrorMessage', () => ({
  ErrorMessage: () => <div>Error Occurred</div>,
}));

vi.mock('../components/Spinner', () => ({
  Spinner: () => <div>Loading...</div>,
}));

describe('CharacterDetails Component', () => {
  it('should renders Spinner when loading is true', () => {
    render(<CharacterDetails details={{}} error={null} isLoading={true} />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should renders character details when data is provided', () => {
    const mockDetails = {
      name: 'Luke Skywalker',
      gender: 'Male',
      homeworld: 'Tatooine',
      films: ['A New Hope', 'The Empire Strikes Back'],
      vehicles: ['X-wing', 'Speeder Bike'],
    };

    render(
      <CharacterDetails details={mockDetails} error={null} isLoading={false} />,
    );

    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    expect(screen.getByText('Male')).toBeInTheDocument();
    expect(screen.getByText('Tatooine')).toBeInTheDocument();
    expect(screen.getByText('A New Hope')).toBeInTheDocument();
    expect(screen.getByText('X-wing')).toBeInTheDocument();
  });

  it('should renders ErrorMessage component when error is true', () => {
    render(<CharacterDetails details={{}} error={true} isLoading={false} />);

    expect(screen.getByText('Error Occurred')).toBeInTheDocument();
  });

  it('should renders empty details when no films or vehicles are provided', () => {
    const mockDetails = {
      name: 'Leia Organa',
      gender: 'Female',
      homeworld: 'Alderaan',
    };

    render(
      <CharacterDetails details={mockDetails} error={null} isLoading={false} />,
    );

    expect(screen.getByText('Leia Organa')).toBeInTheDocument();
    expect(screen.getByText('Female')).toBeInTheDocument();
    expect(screen.getByText('Alderaan')).toBeInTheDocument();
  });
});
