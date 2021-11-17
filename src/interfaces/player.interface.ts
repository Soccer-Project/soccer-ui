export interface IPlayer {
    data_season_id?: string,
    players_player_id: string,
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
