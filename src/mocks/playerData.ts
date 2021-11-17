import { IPlayer } from "../interfaces/player.interface";

export const getMockPlayerData = (): IPlayer[] => (
    [
        {
          data_season_id: "3ecb379e-3648-4af1-92c4-bc307c0088e4",
          players_player_id: "9f32a001-c8ca-48db-8694-41ddf03cd110",
          games: 49,
          goals: 6,
          assists: 7,
          playerId: {
            name: "Vinicius Junior"
          },
          seasonId: {
            season_id: "d0c983c3-e4f6-4fd8-b36f-f48b04f2a9eb",
            name: "2020"
          }
        },
        {
          data_season_id: "4405905e-9f01-44a9-90ef-8865d8ba3017",
          players_player_id: "9f32a001-c8ca-48db-8694-41ddf03cd110",
          games: 38,
          goals: 5,
          assists: 4,
          playerId: {
            name: "Vinicius Junior"
          },
          seasonId: {
            season_id: "95d99f77-3893-4035-b1da-8ddb292168f0",
            name: "2019"
          }
        }
    ]
)

export const getMockPlayers = (): IPlayer[] => (
  [
    {
        players_player_id: "1c93d8cc-9890-4475-964f-e58beb84f7c0",
        players_name: "Vinicius Junior",
        games: 101,
        goals: 20,
        assists: 16
    },
    {
        players_player_id: "59e11799-1710-4b19-a1d2-8e82a7c83d23",
        players_name: "Neymar",
        games: 67,
        goals: 37,
        assists: 26
    }
  ]
)
