import { render, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PlayerApi from '../api/player';
import { getMockPlayers } from '../mocks/playerData';
import HomePage from './HomePage';

describe('Should render table with all players data', () => {

  const mockPlayers = getMockPlayers();
  it('Should render data off all players', async () => {
    PlayerApi.getAllPlayers = jest.fn().mockResolvedValue(mockPlayers)
    
    await act(async () => {
      render(
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      )
    })
  
    const th = screen.getAllByRole('row')
    const neymar = screen.getByText('Neymar')
    const viniciusJr = screen.getByText('Vinicius Junior')
  
    expect(PlayerApi.getAllPlayers).toHaveBeenCalled()
    expect(th).toHaveLength(3)
    expect(neymar).toBeInTheDocument()
    expect(viniciusJr).toBeInTheDocument()
  })

  it('Does not should render data when api return a empty array', async () => {
    PlayerApi.getAllPlayers = jest.fn().mockResolvedValue([])
    
    await act(async () => {
      render(
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      )
    })
  
    const th = screen.getAllByRole('row')
  
    expect(PlayerApi.getAllPlayers).toHaveBeenCalled()
    expect(th).toHaveLength(1)
  })
});
