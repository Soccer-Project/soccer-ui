import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { getMockPlayerData, getMockPlayers } from '../../mocks/playerData';
import Table from './Table'

describe('Table', () => {
    const mockPlayers = getMockPlayers()

    const mockPlayerData = getMockPlayerData()

    it('should render table with general data of all players', () => {
        render(<BrowserRouter>
                    <Table
                        columns = {['Player', 'Games', 'Goals']}
                        data={mockPlayers}
                    />
                </BrowserRouter>)

        const th = screen.getAllByRole('row')

        expect(th).toHaveLength(3)
    })

    it('should render table with specific data of one player', () => {
        render(<BrowserRouter>
                    <Table
                        columns = {['Season', 'Games', 'Goals']}
                        data={mockPlayerData.detailed}
                        playerData={mockPlayerData.total}
                    />
                </BrowserRouter>)

        const th = screen.getAllByRole('row')

        expect(th).toHaveLength(4)
    })
})