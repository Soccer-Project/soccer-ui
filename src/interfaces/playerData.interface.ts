import { IPlayer } from "./player.interface";

export interface IPlayerData {
    detailed: IPlayer[],
    total: {
        players_player_id: string,
        players_name: string,
        games: number,
        goals: number,
        assists: number
    }
}
