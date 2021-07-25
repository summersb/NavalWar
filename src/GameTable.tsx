import React, { ReactElement } from 'react'
import DrawPile from './DrawPile'
import PlayerHand from './PlayerHand'
import PlayerTable from './PlayerTable'
import ShipPile from './ShipPile'

const GameTable: React.FC = (): ReactElement => {
	return (
		<>
			<div>Game Table</div>
			<DrawPile />
			<ShipPile />
			<PlayerHand />
			<PlayerHand />
			<PlayerHand />
			<PlayerHand />
			<PlayerHand />
			<PlayerTable />
			<PlayerTable />
			<PlayerTable />
			<PlayerTable />
			<PlayerTable />
		</>
	)
}

export default GameTable
