import axios from 'axios';

const PlayerApi = {
    getPlayer: async (playerId: string) => {
        const response = await axios.get(`https://soccerprojectapi.herokuapp.com/players/${playerId}`)
        return response.data
    },
    getAllPlayers: async () => {
        const response = await axios.get(`https://soccerprojectapi.herokuapp.com/players`)
        return response.data
    }
}

export default PlayerApi;
