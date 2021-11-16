import { render, screen } from '@testing-library/react';
import Player from './Player';

interface IPlayer {
    data_season_id?: string,
    player_id: string,
    players_name?: string,
    games: number,
    goals: number,
    assists: number,
    playerId?: {
        name: string
    },
    seasonId?: {
        season_id: string,
        name: string
    }
}

const mockData: IPlayer[] = [
    {
      "data_season_id": "3ecb379e-3648-4af1-92c4-bc307c0088e4",
      "player_id": "9f32a001-c8ca-48db-8694-41ddf03cd110",
      "games": 49,
      "goals": 6,
      "assists": 7,
      "playerId": {
        "name": "Vinicius Junior"
      },
      "seasonId": {
        "season_id": "d0c983c3-e4f6-4fd8-b36f-f48b04f2a9eb",
        "name": "2020"
      }
    },
    {
      "data_season_id": "4405905e-9f01-44a9-90ef-8865d8ba3017",
      "player_id": "9f32a001-c8ca-48db-8694-41ddf03cd110",
      "games": 38,
      "goals": 5,
      "assists": 4,
      "playerId": {
        "name": "Vinicius Junior"
      },
      "seasonId": {
        "season_id": "95d99f77-3893-4035-b1da-8ddb292168f0",
        "name": "2019"
      }
    },
    {
      "data_season_id": "de48ef15-f97d-42a4-a89a-13e61cfb1127",
      "player_id": "9f32a001-c8ca-48db-8694-41ddf03cd110",
      "games": 15,
      "goals": 9,
      "assists": 7,
      "playerId": {
        "name": "Vinicius Junior"
      },
      "seasonId": {
        "season_id": "cec0f824-afa5-490d-a2eb-bbc853447143",
        "name": "2021"
      }
    }
]

describe('Player', () => {
    it('Should render data detailed about player', () => {
        //TODO: WRITE UNIT TEST
        
    })
})
