import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PlayerApi from '../api/player';
import Table from '../components/Table/Table';

const Player = () => {
    const [data, setData] = useState([])

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
            data={data}
        />
    )
}

export default Player
