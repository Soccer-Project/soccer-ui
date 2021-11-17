import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Table from '../components/Table/Table';

interface TParams {
    player: string
}

const Player = ({ match }: RouteComponentProps<TParams>) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
        const response = await fetch(`https://soccerprojectapi.herokuapp.com/players/${match.params.player}`)
        setData(await response.json())
        }

        getData()
    }, [ match ]);

    
    return(
        <Table 
            columns={['Season', 'Games', 'Goals']}
            data={data}
        />
    )
}

export default Player
