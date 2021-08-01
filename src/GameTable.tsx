import React, {ReactElement} from 'react'
import DrawPile from './DrawPile'
import PlayerTable from './PlayerTable'
import ShipPile from './ShipPile'
import type {GameConfig} from './Types'
import GameConfigComponent from './GameConfigComponent'

interface GameTableProps {
	config: GameConfig
}

const GameTable: React.FC<GameTableProps> = (props: GameTableProps): ReactElement => {
	const {config} = props
	return (
		<>
			<div>Game Table</div>
			<GameConfigComponent config={config}/>
			<DrawPile/>
			<ShipPile/>
			<PlayerTable/>
			<PlayerTable/>
			<PlayerTable/>
			<PlayerTable/>
			<PlayerTable/>
		</>
	)
}

export default GameTable
