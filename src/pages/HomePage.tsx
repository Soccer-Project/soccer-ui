import { useState, useEffect } from 'react';
import Table from '../components/Table/Table';

const HomePage = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
        const response = await fetch('https://soccerprojectapi.herokuapp.com/players')
        setData(await response.json())
        }

        getData()
    }, []);

    console.log(data)

    return (
        <Table 
            columns={['Player', 'Games', 'Goals']}
            data={data}
        />
    )
}

export default HomePage;
