import { useState, useEffect } from 'react';
import PlayerApi from '../api/player';
import Table from '../components/Table/Table';

const HomePage = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const response = await await PlayerApi.getAllPlayers()
            setData(response)
        }

        getData()
    }, []);

    return (
        <Table 
            columns={['Player', 'Games', 'Goals']}
            data={data}
        />
    )
}

export default HomePage;
