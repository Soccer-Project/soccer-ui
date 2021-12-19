import axios from 'axios';
import { getMockPlayerData, getMockPlayers } from '../mocks/playerData';
import PlayerApi from './player';

jest.mock('axios')
const axiosMock = axios as jest.Mocked<typeof axios>;

describe('PlayerApi', () => {
    const mockPlayers = getMockPlayers()
    const mockPlayerData = getMockPlayerData()
    
    it('should return all data of player', async () => {
        axiosMock.get = jest.fn().mockResolvedValue({ data: mockPlayerData })

        const response = await PlayerApi.getPlayer(mockPlayerData.detailed[0].players_player_id)

        expect(axiosMock.get).toHaveBeenCalledWith(`https://soccerprojectapi.herokuapp.com/players/${mockPlayerData.detailed[0].players_player_id}`)
        expect(response).toMatchObject(mockPlayerData)
    })

    it('should return all players general data', async () => {
        axiosMock.get = jest.fn().mockResolvedValue({ data: mockPlayers })

        const response = await PlayerApi.getAllPlayers()

        expect(axiosMock.get).toHaveBeenCalledWith(`https://soccerprojectapi.herokuapp.com/players`)
        expect(response).toMatchObject(mockPlayers)
    })
})