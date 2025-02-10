import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from '../components/Header';

describe('Header', () => {
  it('should render title with description', () => {
    render(<Header title="Mateusz" description="Wesolowski" />);

    const heading = screen.getByRole('heading');
    const description = screen.getByText('Wesolowski');

    expect(heading).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
