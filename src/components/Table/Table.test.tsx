import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Table from './Table'

describe('Table', () => {
    const mockPlayers = [
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
        },
        {
            players_player_id: "88f6208a-9d32-4d10-aac7-0d05c6f5d1cd",
            players_name: "Gabriel Barbosa",
            games: 40,
            goals: 21,
            assists: 6
        },
        {
            players_player_id: "a38e3f47-a1ee-4a17-b32b-2d732debd6b8",
            players_name: "Messi",
            games: 99,
            goals: 72,
            assists: 41
        } 
    ]
    it('should render table with components', () => {
        render(<BrowserRouter>
                    <Table
                        columns = {['Player', 'Games', 'Goals']}
                        data={mockPlayers}
                    />
                </BrowserRouter>)

        const th = screen.getAllByRole('row')

        expect(th).toHaveLength(5)
    })
})