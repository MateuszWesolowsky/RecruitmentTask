import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, vi, expect } from 'vitest';
import { Pagination } from '../components/Pagination';
import { DataContext } from '../context/DataContext';

describe('Pagination Component', () => {
  it('renders Previous and Next buttons', () => {
    const mockState = { page: 1, totalPages: 5 };
    const dispatchMock = vi.fn();

    render(
      <DataContext.Provider
        value={{ state: mockState, dispatch: dispatchMock }}
      >
        <Pagination />
      </DataContext.Provider>,
    );

    expect(
      screen.getByRole('button', { name: /previous/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument();
  });

  it('dispatches action to go to the previous page when previous is clicked', async () => {
    const mockState = { page: 2, totalPages: 5 };
    const dispatchMock = vi.fn();

    render(
      <DataContext.Provider
        value={{ state: mockState, dispatch: dispatchMock }}
      >
        <Pagination />
      </DataContext.Provider>,
    );

    await userEvent.click(screen.getByRole('button', { name: /previous/i }));

    expect(dispatchMock).toHaveBeenCalledWith({
      type: 'SET_PAGE',
      payload: 1,
    });
  });

  it('dispatches action to go to the next page when Next is clicked', async () => {
    const mockState = { page: 2, totalPages: 5 };
    const dispatchMock = vi.fn();

    render(
      <DataContext.Provider
        value={{ state: mockState, dispatch: dispatchMock }}
      >
        <Pagination />
      </DataContext.Provider>,
    );

    await userEvent.click(screen.getByRole('button', { name: /next/i }));

    expect(dispatchMock).toHaveBeenCalledWith({
      type: 'SET_PAGE',
      payload: 3,
    });

    expect(dispatchMock).toHaveBeenCalledWith({
      type: 'SET_SEARCH_VALUE',
      payload: '',
    });
  });
});
