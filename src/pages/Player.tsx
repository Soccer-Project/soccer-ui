import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PlayerApi from '../api/player';
import Table from '../components/Table/Table';
import { IPlayerData } from '../interfaces/playerData.interface';

const Player = () => {
    const [data, setData] = useState<IPlayerData>({
        detailed: [],
        total: {
            players_player_id: '',
            players_name: '',
            games: 0,
            goals: 0,
            assists: 0
        }
    })

    const { player } = useParams<{ player: string }>()

    useEffect(() => {
        const getData = async () => {
        const response = await PlayerApi.getPlayer(player)
        setData(response)
        }

        getData()
    }, [player]);
    
    return(
        <Table 
            columns={['Season', 'Games', 'Goals']}
            data={data.detailed}
            playerData={data.total}
        />
    )
}

export default Player
