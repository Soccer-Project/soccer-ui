import { render, screen, act } from '@testing-library/react';
import PlayerApi from '../api/player';
import { getMockPlayerData } from '../mocks/playerData';
import Player from './Player';

jest.mock('../api/player')

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    player: '9f32a001-c8ca-48db-8694-41ddf03cd110',
  }),
}));

describe('Player', () => {
  const mockPlayerData = getMockPlayerData()
  it('Should render data detailed about player', async () => {
    PlayerApi.getPlayer = jest.fn().mockResolvedValue(mockPlayerData)
    
    await act(async () => {
      render(<Player />)
    })

    const th = screen.getAllByRole('row')

    expect(PlayerApi.getPlayer).toHaveBeenCalledWith('9f32a001-c8ca-48db-8694-41ddf03cd110')
    expect(th).toHaveLength(3)
  })
})
